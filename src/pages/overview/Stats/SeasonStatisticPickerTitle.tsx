import { Group, Title } from "@mantine/core";

export type SeasonStatisticPickerProps = {
  title: string;
  children?: React.ReactNode;
};

const SeasonStatisticPickerTitle: React.FC<SeasonStatisticPickerProps> = ({ title, children }) => {
  return (
    <Group h={50}>
      <Title size="xl">
        {title}
      </Title>
      {children}
    </Group>
  );
};

export default SeasonStatisticPickerTitle;
