import { Text, Group } from "@mantine/core";

export type SeasonStatisticPickerProps = {
  title: string;
  children?: React.ReactNode;
};

const SeasonStatisticPickerTitle: React.FC<SeasonStatisticPickerProps> = ({ title, children }) => {
  return (
    <Group h={50}>
      <Text
        size="xl"
        fw={600}
        variant="gradient"
        gradient={{ from: "orange", to: "orange", deg: 360 }}
      >
        {title}
      </Text>
      {children}
    </Group>
  );
};

export default SeasonStatisticPickerTitle;
