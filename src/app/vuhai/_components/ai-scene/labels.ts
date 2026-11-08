export type SceneVariant = "ai" | "data-center";

export type SceneLabelModel = {
  /** Position in the swaying group's local space. */
  position: [number, number, number];
  text: string;
};

export const sceneLabelData: Record<SceneVariant, SceneLabelModel[]> = {
  ai: [
    { position: [-1.95, 3.5, 1.2], text: "Chatbot AI" },
    { position: [0, 5.1, -0.4], text: "GPU Server" },
    { position: [-2.7, 4.4, -1], text: "AI Camera" },
    { position: [2.5, 4.3, 0.9], text: "Giao thông thông minh" },
  ],
  "data-center": [
    { position: [0, 4.4, -0.6], text: "Tủ rack mật độ cao" },
    { position: [-3.2, 3.2, 1.2], text: "Làm mát chất lỏng" },
    { position: [3.2, 3.1, 1.2], text: "Điện dự phòng 2N" },
    { position: [0, 3.6, 0.4], text: "Mạng 400G" },
  ],
};
