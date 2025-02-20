import { useEffect, useState } from "react";
import StatisticsService from "../../../services/api/statisticsService";
import { CompetitionScorers } from "@types";
import { Container, Flex } from "@mantine/core";
import GoalsStatsArea from "./GoalsStatsArea";
import AssistStatsArea from "./AssistsStatsArea";
import PenaltiesStatArea from "./PenaltiesStatsArea";
import { useAppSelector } from "@hooks";
import OverviewLoader from "../../../components/shared/OverviewLoader";
import OverviewLayout from "../OverviewLayout";

const CompetitionStatistics: React.FC = () => {
  const selectedCompetitionCode = useAppSelector((state) => state.subscription.selectedCompetitionCode);

  const [scorers, updateScorers] = useState<CompetitionScorers>();

  const getScorers = async (code: string) => {
    const response = await StatisticsService.get(code);

    updateScorers(response);
  };

  useEffect(() => {
    if (selectedCompetitionCode != undefined) {
      getScorers(selectedCompetitionCode);
    }
  }, [selectedCompetitionCode]);

  const isPageLoading = !scorers || !selectedCompetitionCode;

  return (
    <OverviewLayout headerText="Player Stats">
      <Container fluid p={0}>
        {isPageLoading ? (
          <Flex justify="center" align="center" mih="50vh">
            <OverviewLoader size={50} />
          </Flex>
        ) : (
          <Flex justify="center" align="flex-start" gap="md" wrap="wrap" mt="md">
            <Flex flex={{ base: "1 1 100%", lg: "1 1 32%" }}>
              <GoalsStatsArea
                competition={scorers.competition}
                season={scorers.season}
                scorers={scorers.scorers}
              />
            </Flex>
            <Flex flex={{ base: "1 1 100%", lg: "1 1 32%" }}>
              <AssistStatsArea
                competition={scorers.competition}
                season={scorers.season}
                scorers={scorers.scorers}
              />
            </Flex>
            <Flex flex={{ base: "1 1 100%", lg: "1 1 32%" }}>
              <PenaltiesStatArea
                competition={scorers.competition}
                season={scorers.season}
                scorers={scorers.scorers}
              />
            </Flex>
          </Flex>
        )}
      </Container>
    </OverviewLayout>
  );
};

export default CompetitionStatistics;
