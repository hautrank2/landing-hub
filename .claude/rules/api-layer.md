---
paths:
  - "src/**/*.{ts,tsx}"
---

# Tầng API — mọi endpoint khai báo trong `src/apis/`

Component, hook và page **không** tự viết đường dẫn endpoint. Mỗi endpoint là
một hàm trong `src/apis/<resource>.ts`; nơi dùng chỉ gọi hàm đó.

```
src/apis/
  index.ts    # export * from "./ai"; export * from "./ticket"; …
  ai.ts       # aiApi
  ticket.ts   # ticketApi
```

> Thư mục là `src/apis/`, **không** phải `src/app/apis/`: `src/app/` là routing
> của Next.js, đặt vào đó dễ bị hiểu nhầm thành route.

## Quy tắc

- Một file mỗi resource, tên theo resource (`ai.ts`, `ticket.ts`, `user.ts`),
  xuất một object `xxxApi`: `export const aiApi = { listConversations, … }`.
  Re-export trong `index.ts`; nơi dùng import `import { aiApi } from "@/apis"`.
- **Tên hàm theo hành động**, tên đúng nghiệp vụ (`listConversations`,
  `getConversation`, `deleteConversation`, `chat`), không đặt theo HTTP verb.
- **Comment một dòng trên mỗi hàm ghi đúng `METHOD /path`** để đối chiếu với
  server (path không có prefix `/api`; `httpClient` đã lo base URL).
- **Param và response khai báo ngay trong file đó**, đặt tên
  `<Resource><Action>Params` / `<Resource><Action>Response`
  (`AiListConversationsParams`, `AiListConversationsResponse`).
  - Response dùng lại model trong `@/types` (`TableResponse<TicketModel>`,
    `AiConversationModel`) thay vì định nghĩa lại shape.
  - Query param theo `ops-desk-server/.claude/rules/api-conventions.md`
    (`page`, `pageSize`, `populations`, `xxxId`, `startXxxAt`…).
- Hàm **trả `data` đã bóc** (`return data`), không trả `AxiosResponse`; nơi dùng
  không phải biết axios. Hàm ghi không có body trả về thì trả `void`.
- Chỉ dùng `httpClient` từ `@/lib/httpClient` (xem `http-client.md`). Không
  `fetch`, không `axios` trực tiếp, không ghép base URL hay header
  `Authorization`.
- API chỉ gọi mạng: **không** `useState`, toast, `useQuery`, `localStorage`.
  Cache và `queryKey` nằm ở hook gọi nó (`useQuery({ queryFn: () => ticketApi.get(id) })`).
- Upload `multipart/form-data`: hàm nhận `FormData` làm tham số và tự đặt
  `headers: { "Content-Type": "multipart/form-data" }`.

## Stream (SSE)

SSE qua POST vẫn đi qua `httpClient`, dùng adapter fetch của axios để nhận body
dạng stream, không viết `fetch` riêng:

```ts
chat: async ({ signal, ...body }: AiChatParams) => {
  const { data } = await httpClient.post<ReadableStream<Uint8Array>>("/ai/chat", body, {
    adapter: "fetch",
    responseType: "stream",
    signal,
  });
  return data;
},
```

Hàm API chỉ trả stream thô; phần đọc và parse event nằm ở hook của component.

## Thêm một resource mới

1. Tạo `src/apis/<resource>.ts` với type Params / Response và object `xxxApi`.
2. Thêm `export * from "./<resource>"` vào `src/apis/index.ts`.
3. Thay các lời gọi `httpClient.*` rải rác của resource đó bằng `xxxApi.*`.

## Hiện trạng

Mới `ai.ts` theo rule này. Phần còn lại của repo (`tickets`, `assets`,
`users`, `departments`, `locations`, …) vẫn gọi `httpClient` trực tiếp trong
hook/page — chuyển dần khi sửa tới, không refactor hàng loạt nếu không được
yêu cầu.
