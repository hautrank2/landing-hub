import { useState } from "react";
import { vuhaiContact } from "~/data/vuhai";
import type { UseConsultFormProps } from "./type";

export const useConsultForm = ({ topic }: UseConsultFormProps) => {
  const [sent, setSent] = useState(false);

  // No backend yet: hand the request to the visitor's mail client addressed to support.
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Họ tên: ${data.get("name") ?? ""}`,
      `Điện thoại: ${data.get("phone") ?? ""}`,
      data.get("taxCode") ? `Mã số thuế: ${data.get("taxCode")}` : null,
      "",
      `${data.get("message") ?? ""}`,
    ].filter((line) => line !== null);
    const subject = encodeURIComponent(`[${topic}] Yêu cầu tư vấn`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${vuhaiContact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return { sent, onSubmit };
};
