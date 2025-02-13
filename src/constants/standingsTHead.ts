type TableHeader = {
  label: string;
  style?: {
    textAlign?: "left" | "center" | "right";
    color?: string;
    fontWeight?: "bold" | "normal";
  };
};

export const standingsTHead: TableHeader[] = [
  { label: "Position", style: { textAlign: "left", color: "gray", fontWeight: "bold" } },
  { label: "Club", style: { textAlign: "left", color: "gray", fontWeight: "bold" } },
  { label: "Played", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "Won", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "Draw", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "Lost", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "GF", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "GA", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "GD", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "Points", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
  { label: "Form", style: { textAlign: "center", color: "gray", fontWeight: "bold" } },
];
