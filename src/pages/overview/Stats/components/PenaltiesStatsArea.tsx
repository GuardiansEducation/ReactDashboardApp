import { Card, Stack } from "@mantine/core";
import { CustomLoader } from "@components";
import { useTopScorers } from "@hooks";
import { StatsAreaProps } from "./StatsAreaProps";
import Player from "./Player";
import StatsAreaHeader from "./StatsAreaHeader";
import SeasonStatisticPicker from "./SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "./SeasonStatisticPickerTitle";

import Penalties from "/Penalties.png";

const PenaltiesStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorers }) => {
  const { loading, startDate, endDate, topScorers, updateScorers } = useTopScorers(
    competition.code,
    season,
    scorers
  );

  const sortByPenalties = () => {
    return topScorers?.slice().sort((first, second) => {
      if (getValue(first.penalties) > getValue(second.penalties)) {
        return -1;
      }
      if (getValue(first.penalties) < getValue(second.penalties)) {
        return 1;
      }
      return 0;
    });
  };

  const getValue = (value: number | null) => {
    return value != null ? value : 0;
  };

  const playerList = sortByPenalties()
    ?.slice(0, 10)
    .map((player, index) => (
      <Player key={index} scorer={player} position={++index} value={player.penalties} />
    ));

  const selectorTitle = (
    <SeasonStatisticPickerTitle title={`${startDate} - ${endDate}`}>
      {loading && <CustomLoader />}
    </SeasonStatisticPickerTitle>
  );

  return (
    <Card shadow="sm" padding="lg" withBorder w="100%">
      <Card.Section>
        <StatsAreaHeader title="Penalties" backgroundImage={Penalties} />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <SeasonStatisticPicker title={selectorTitle} updateSeason={updateScorers} />
        {playerList}
      </Stack>
    </Card>
  );
};

export default PenaltiesStatsArea;
