import { useEffect, useState } from "react";
import StatisticsService from "../../../services/api/statisticsService";
import { CompetitionScorers, SubscribedCompetition } from "@types";
import { Group, Container, Stack } from "@mantine/core";
import GoalsStatsArea from "./GoalsStatsArea";
import AssistStatsArea from "./AssistsStatsArea";
import PenaltiesStatArea from "./PenaltiesStatsArea";
import { useAppSelector } from "@hooks";
import OverviewLoader from "../../../components/shared/OverviewLoader";

const CompetitionStatistics: React.FC = () => {
  const selectedOverview: SubscribedCompetition | undefined = useAppSelector(
    (state) => state.subscription.selectedOverviewCompetition
  );

  const [scorers, updateScorers] = useState<CompetitionScorers>();

  const getScorers = async (code: string) => {
    const response = await StatisticsService.get(code);

    updateScorers(response);
  };

  useEffect(() => {
    if (selectedOverview?.code != undefined) getScorers(selectedOverview?.code);
  }, [selectedOverview?.code]);

  return (
    <Container fluid>
      {scorers === undefined || !selectedOverview ? (
        <OverviewLoader />
      ) : (
        <Stack>
          <Group justify="center" grow>
            <GoalsStatsArea
              competition={scorers.competition}
              season={scorers.season}
              scorer={scorers.scorers}
            />
            <AssistStatsArea
              competition={scorers.competition}
              season={scorers.season}
              scorer={scorers.scorers}
            />
            <PenaltiesStatArea
              competition={scorers.competition}
              season={scorers.season}
              scorer={scorers.scorers}
            />
          </Group>
        </Stack>
      )}
    </Container>
  );
};

export default CompetitionStatistics;
