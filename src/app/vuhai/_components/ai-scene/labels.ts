export type SceneLabelModel = {
  /** Position in the swaying group's local space. */
  position: [number, number, number];
  text: string;
};

export const sceneLabels: SceneLabelModel[] = [
  { position: [-1.95, 3.5, 1.2], text: "Chatbot AI" },
  { position: [0, 5.1, -0.4], text: "GPU Server" },
  { position: [-2.7, 4.4, -1], text: "AI Camera" },
  { position: [2.5, 4.3, 0.9], text: "Giao thông thông minh" },
];
