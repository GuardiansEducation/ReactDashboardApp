import { Badge, Flex, Group, Text } from "@mantine/core";

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
    <Group justify="center">
      {streak.split(",").map((result, index) => {
        return (
          <Badge
            key={index}
            color={STREAK_COLORS[result.toLowerCase()] || "gray"}
            radius="xl"
            size="lg"
            w={32}
            h={32}
            display="flex"
            p={0}
          >
            <Flex align="center" justify="center">
              <Text>{result.toUpperCase()}</Text>
            </Flex>
          </Badge>
        );
      })}
    </Group>
  );
};

export default Streak;
