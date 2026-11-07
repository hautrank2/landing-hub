// Unsplash photos (free licence, no attribution required), served from their
// CDN; `next.config.ts` already allows any remote host.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photoData = {
  heroSky: {
    src: unsplash("1513295202663-54cd69dd2b43"),
    alt: "Refinery on the horizon under a wide, clear morning sky",
  },
  column: {
    src: unsplash("1602860109208-613d39362844"),
    alt: "Steel distillation column and pipework at a refinery in daylight",
  },
  plant: {
    src: unsplash("1611581372056-30cf28a7bd2e"),
    alt: "Process plant with steel piping under a blue sky",
  },
  tanks: {
    src: unsplash("1693847173071-bd6237101335"),
    alt: "Waterfront tank farm with storage tanks along the quay",
  },
  offshore: {
    src: unsplash("1646191673580-7160942ac198"),
    alt: "Offshore drilling rig at sea in soft evening light",
  },
};
