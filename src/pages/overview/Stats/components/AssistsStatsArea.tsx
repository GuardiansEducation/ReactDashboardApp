import { Card, Stack } from "@mantine/core";
import { CustomLoader } from "@components";
import { useTopScorers } from "@hooks";
import { StatsAreaProps } from "./StatsAreaProps";
import Player from "./Player";
import StatsAreaHeader from "./StatsAreaHeader";
import SeasonStatisticPicker from "./SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "./SeasonStatisticPickerTitle";

import Assists from "/Assists.png";

const AssistsStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorers }) => {
  const { loading, startDate, endDate, topScorers, updateScorers } = useTopScorers(
    competition.code,
    season,
    scorers
  );

  const sortByAssists = () => {
    return topScorers?.slice().sort((first, second) => {
      if (getValue(first.assists) > getValue(second.assists)) {
        return -1;
      }
      if (getValue(first.assists) < getValue(second.assists)) {
        return 1;
      }
      return 0;
    });
  };

  const getValue = (value: number | null) => {
    return value != null ? value : 0;
  };

  const playerList = sortByAssists()
    ?.slice(0, 10)
    .map((player, index) => (
      <Player key={index} scorer={player} position={++index} value={player.assists} />
    ));

  const selectorTitle = (
    <SeasonStatisticPickerTitle title={`${startDate} - ${endDate}`}>
      {loading && <CustomLoader variant="horizontal" />}
    </SeasonStatisticPickerTitle>
  );

  return (
    <Card shadow="sm" padding="lg" withBorder w="100%">
      <Card.Section>
        <StatsAreaHeader title="Assists" backgroundImage={Assists} />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <SeasonStatisticPicker title={selectorTitle} updateSeason={updateScorers} />
        {playerList}
      </Stack>
    </Card>
  );
};

export default AssistsStatsArea;
