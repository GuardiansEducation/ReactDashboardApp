import { Card, Stack, Text, Select } from "@mantine/core";
import { useState } from "react";
import { StatsAreaProps } from "./StatsAreaProps";
import { Scorer } from "@types";
import Player from "./Player";
import StatsAreaHeader from "./StatsAreaHeader";
import StatisticsService from "../../../services/api/statisticsService";
import Assists from "/Assists.png";

const AssistsStatsArea: React.FC<StatsAreaProps> = ({ competition, season, scorer }) => {
  const [topScorers, updateTopScorers] = useState<Scorer[] | undefined>(scorer);
  const [startDate, updateStartDate] = useState<string | undefined>(
    season.startDate.substring(0, season.startDate.indexOf("-"))
  );
  const [endDate, updateEndDate] = useState<string | undefined>(
    season.endDate.substring(0, season.endDate.indexOf("-"))
  );

  const updateScorers = async (season: string | undefined) => {
    if (season === undefined) return;

    const response = await StatisticsService.getBySeason(competition.code, season);

    updateTopScorers(response.scorers);
    updateStartDate(response.season.startDate.substring(0, response.season.startDate.indexOf("-")));
    updateEndDate(response.season.endDate.substring(0, response.season.endDate.indexOf("-")));
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
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <StatsAreaHeader title="Assists" emblem={competition.emblem} backgroundImage={Assists} />
      </Card.Section>
      <Stack justify="space-between" mt="md" mb="xs">
        <Stack>
          <Text
            size="xl"
            fw={600}
            variant="gradient"
            gradient={{ from: "orange", to: "orange", deg: 360 }}
          >
            {startDate}-{endDate} Player Stats
          </Text>
          <Select
            onChange={(value) => {
              const season = value?.substring(0, value.indexOf("/"));

              updateScorers(season);
            }}
            label="Filter by Season"
            data={["2024/25", "2023/24", "2022/23"]}
            defaultValue="2024/25"
          />
        </Stack>
        {sortByAssists()
          ?.slice(0, 10)
          .map((player, index) => (
            <Player key={index} scorer={player} position={++index} value={player.assists} />
          ))}
      </Stack>
    </Card>
  );
};

export default AssistsStatsArea;
