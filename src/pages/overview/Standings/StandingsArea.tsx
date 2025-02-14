import { Container, Flex, Image, Stack } from "@mantine/core";
import CompetitionTable from "./CompetitionTable";
import { SubscribedCompetition } from "@types";
import { useAppSelector } from "@hooks";
import SeasonStatisticPicker from "../Stats/SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "../Stats/SeasonStatisticPickerTitle";
import OverviewLoader from "../../../components/shared/OverviewLoader";
import { useStandings } from "../../../hooks/Standings/useStandings";
import { useSeasonDates } from "../../../hooks/Standings/useSeasonDates";
import OverviewLayout from "../OverviewLayout";

const StandingsArea: React.FC = () => {
  const selectedOverview: SubscribedCompetition | undefined = useAppSelector(
    (state) => state.subscription.selectedOverviewCompetition
  );

  const { standings, updateStandingsBySeason } = useStandings(selectedOverview);
  const { startDate, endDate } = useSeasonDates(standings);

  const selectorTitle = (
    <SeasonStatisticPickerTitle title={`${startDate} - ${endDate} Standings`} />
  );

  return (
    <OverviewLayout>
      <Container fluid>
        {standings === undefined || !selectedOverview ? (
          <Flex justify="center" align="center" mih="50vh">
            <OverviewLoader size={50} />
          </Flex>
        ) : (
          <Stack justify="space-between" mt="md" mb="xs">
            <SeasonStatisticPicker title={selectorTitle} updateSeason={updateStandingsBySeason} />
            <Stack align="stretch" justify="center" gap="xs">
              <Image w={80} h={80} src={standings.competition.emblem} />
            </Stack>
            <CompetitionTable standings={standings} />
          </Stack>
        )}
      </Container>
    </OverviewLayout>
  );
};

export default StandingsArea;
