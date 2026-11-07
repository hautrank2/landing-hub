---
paths:
  - "src/**/*.{ts,tsx}"
---

# Gọi API — chỉ dùng `httpClient`

Mọi lời gọi API đi qua `httpClient` từ `@/lib/httpClient`. Nó lo sẵn base URL,
gắn token, và serialize query (mảng lặp key, bỏ `undefined`/`null`).

## Cấm

- `fetch(...)` để gọi API.
- Tạo thêm axios instance, hoặc gọi `axios` trực tiếp.
- Tự gắn header `Authorization` hay tự ghép base URL.

Endpoint được khai báo trong `src/apis/` — xem `api-layer.md`.

## Không có ngoại lệ

SSE (`POST /ai/chat`) cũng đi qua `httpClient`: dùng `adapter: "fetch"` +
`responseType: "stream"` (xem `aiApi.chat` trong `src/apis/ai.ts`).
