import { useEffect, useState } from "react";
import { Card, Stack } from "@mantine/core";
import { Scorer } from "@types";
import { StatisticsService } from "@services";
import { OverviewLoader } from "@components";
import { StatsAreaProps } from "./StatsAreaProps";
import Player from "./Player";
import StatsAreaHeader from "./StatsAreaHeader";
import SeasonStatisticPicker from "./SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "./SeasonStatisticPickerTitle";

import Penalties from "/Penalties.png";

const PenaltiesStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorers }) => {
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

    const response = await StatisticsService.getBySeason(competition.code, season);

    setLoading(true);

    updateTopScorers(response.scorers);
    updateStartDate(response.season.startDate.substring(0, response.season.startDate.indexOf("-")));
    updateEndDate(response.season.endDate.substring(0, response.season.endDate.indexOf("-")));

    setLoading(false);
  };

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
      {loading && <OverviewLoader />}
    </SeasonStatisticPickerTitle>
  );

  return (
    <Card shadow="sm" padding="lg" withBorder w="100%">
      <Card.Section>
        <StatsAreaHeader
          title="Penalties"
          emblem={competition.emblem}
          backgroundImage={Penalties}
        />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <SeasonStatisticPicker title={selectorTitle} updateSeason={updateScorers} />
        {playerList}
      </Stack>
    </Card>
  );
};

export default PenaltiesStatsArea;
