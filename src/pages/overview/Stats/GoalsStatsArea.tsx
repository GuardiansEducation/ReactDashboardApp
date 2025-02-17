import { Card, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { StatsAreaProps } from "./StatsAreaProps";
import { Scorer } from "@types";
import Player from "./Player";
import StatisticsService from "../../../services/api/statisticsService";
import StatsAreaHeader from "./StatsAreaHeader";
import Goals from "/Goals.png";
import SeasonStatisticPicker from "./SeasonStatisticPicker";
import OverviewLoader from "../../../components/shared/OverviewLoader";
import SeasonStatisticPickerTitle from "./SeasonStatisticPickerTitle";

const GoalsStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorers }) => {
  const [topScorers, updateTopScorers] = useState<Scorer[] | undefined>(scorers);

  const [startDate, updateStartDate] = useState<string | undefined>(
    season.startDate.substring(0, season.startDate.indexOf("-"))
  );
  const [endDate, updateEndDate] = useState<string | undefined>(
    season.endDate.substring(0, season.endDate.indexOf("-"))
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    updateTopScorers(scorers);
  }, [scorers]);

  const updateScorers = async (season: string | undefined) => {
    if (season === undefined) return;

    setLoading(true);

    const response = await StatisticsService.getBySeason(competition.code, season);

    updateTopScorers(response.scorers);
    updateStartDate(response.season.startDate.substring(0, response.season.startDate.indexOf("-")));
    updateEndDate(response.season.endDate.substring(0, response.season.endDate.indexOf("-")));

    setLoading(false);
  };

  const playerList = topScorers
    ?.slice(0, 10)
    .map((player, index) => (
      <Player key={index} scorer={player} position={++index} value={player.goals} />
    ));

  const selectorTitle = (
    <SeasonStatisticPickerTitle title={`${startDate} - ${endDate}`}>
      {loading && <OverviewLoader />}
    </SeasonStatisticPickerTitle>
  );

  return (
    <Card shadow="sm" padding="lg" withBorder w="100%">
      <Card.Section>
        <StatsAreaHeader title="Goals" emblem={competition.emblem} backgroundImage={Goals} />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <SeasonStatisticPicker title={selectorTitle} updateSeason={updateScorers} />
        {playerList}
      </Stack>
    </Card>
  );
};

export default GoalsStatsArea;
