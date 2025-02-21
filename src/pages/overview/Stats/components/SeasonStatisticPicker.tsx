import { Stack, Select } from "@mantine/core";

export type SeasonStatisticPickerProps = {
  title: React.JSX.Element;
  updateSeason: (season: string | undefined) => void;
};

const SeasonStatisticPicker: React.FC<SeasonStatisticPickerProps> = ({ title, updateSeason }) => {
  return (
    <Stack mb="md" gap={0}>
      {title}
      <Select
        onChange={(value) => {
          const season = value?.substring(0, value.indexOf("/"));

          updateSeason(season);
        }}
        label="Filter by Season"
        data={["2024/25", "2023/24"]}
        defaultValue="2024/25"
      />
    </Stack>
  );
};

export default SeasonStatisticPicker;
