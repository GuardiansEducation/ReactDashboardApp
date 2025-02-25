import { Card, Stack } from "@mantine/core";
import { useTopScorers } from "@hooks";
import { CustomLoader } from "@components";
import { StatsAreaProps } from "./StatsAreaProps";
import Player from "./Player";
import StatsAreaHeader from "./StatsAreaHeader";
import SeasonStatisticPicker from "./SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "./SeasonStatisticPickerTitle";

import Goals from "/Goals.png";

const GoalsStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorers }) => {
  const { loading, startDate, endDate, topScorers, updateScorers } = useTopScorers(
    competition.code,
    season,
    scorers
  );

  const playerList = topScorers
    ?.slice(0, 10)
    .map((player, index) => (
      <Player key={index} scorer={player} position={++index} value={player.goals} />
    ));

  const selectorTitle = (
    <SeasonStatisticPickerTitle title={`${startDate} - ${endDate}`}>
      {loading && <CustomLoader />}
    </SeasonStatisticPickerTitle>
  );

  return (
    <Card shadow="sm" padding="lg" withBorder w="100%">
      <Card.Section>
        <StatsAreaHeader title="Goals" backgroundImage={Goals} />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <SeasonStatisticPicker title={selectorTitle} updateSeason={updateScorers} />
        {playerList}
      </Stack>
    </Card>
  );
};

export default GoalsStatsArea;
