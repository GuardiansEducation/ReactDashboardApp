import { Card, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { Scorer } from "@types";
import { OverviewLoader } from "@components";
import { StatisticsService } from "@services";
import { StatsAreaProps } from "./StatsAreaProps";
import Player from "./Player";
import StatsAreaHeader from "./StatsAreaHeader";
import SeasonStatisticPicker from "./SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "./SeasonStatisticPickerTitle";

import Assists from "/Assists.png";

const AssistsStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorers }) => {
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
      {loading && <OverviewLoader />}
    </SeasonStatisticPickerTitle>
  );

  return (
    <Card shadow="sm" padding="lg" withBorder w="100%">
      <Card.Section>
        <StatsAreaHeader title="Assists" emblem={competition.emblem} backgroundImage={Assists} />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <SeasonStatisticPicker title={selectorTitle} updateSeason={updateScorers} />
        {playerList}
      </Stack>
    </Card>
  );
};

export default AssistsStatsArea;
