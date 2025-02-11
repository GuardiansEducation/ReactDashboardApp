import { Badge, Group } from "@mantine/core";

export type StreakProps = {
  streak: string;
};

const STREAK_COLORS: Record<string, string> = {
  w: "green",
  l: "red",
  d: "gray",
};

const Streak: React.FC<StreakProps> = ({ streak }) => {
  return (
    <Group>
      {streak.split(",").map((result, index) => {
        return (
          <Badge
            key={index}
            color={STREAK_COLORS[result.toLowerCase()] || "gray"}
            radius="xl"
            size="lg"
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              padding: 0,
            }}
          >
            {result.toUpperCase()}
          </Badge>
        );
      })}
    </Group>
  );
};

export default Streak;
