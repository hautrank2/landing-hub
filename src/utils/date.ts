// Pinned to Singapore so the build server and the reader agree on the day.
const longDate = new Intl.DateTimeFormat("en-SG", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Singapore",
});

export const formatDate = (iso: string) => longDate.format(new Date(iso));
