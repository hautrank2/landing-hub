export type SceneLabelModel = {
  /** Position in the facility group's local space. */
  position: [number, number, number];
  tag: string;
  name: string;
};

export const sceneLabels: SceneLabelModel[] = [
  { position: [1.15, 1.45, 1.3], tag: "WH-01", name: "Wellhead" },
  { position: [-2.35, 2.25, -1.3], tag: "T-101", name: "Storage" },
  { position: [2.15, 4.55, -1.45], tag: "C-201", name: "Column" },
  { position: [3.1, 5.35, 1.6], tag: "F-301", name: "Flare" },
];
