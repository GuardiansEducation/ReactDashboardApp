import { Container, Flex, Stack } from "@mantine/core";
import CompetitionTable from "./CompetitionTable";
import { useAppSelector } from "@hooks";
import SeasonStatisticPicker from "../Stats/SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "../Stats/SeasonStatisticPickerTitle";
import OverviewLoader from "../../../components/shared/OverviewLoader";
import { useStandings } from "../../../hooks/Standings/useStandings";
import { useSeasonDates } from "../../../hooks/Standings/useSeasonDates";
import OverviewLayout from "../OverviewLayout";

const StandingsArea: React.FC = () => {
  const selectedOverviewCode = useAppSelector((state) => state.subscription.selectedCompetitionCode);

  const { standings, updateStandingsBySeason } = useStandings(selectedOverviewCode);
  const { startDate, endDate } = useSeasonDates(standings);

  const selectorTitle = <SeasonStatisticPickerTitle title={`${startDate} - ${endDate}`} />;

  const isLoading = !standings || !selectedOverviewCode;

  return (
    <OverviewLayout headerText="Team Standings">
      <Container fluid>
        {isLoading ? (
          <Flex justify="center" align="center" mih="50vh">
            <OverviewLoader size={50} />
          </Flex>
        ) : (
          <Stack justify="space-between" mt="md" mb="xs">
            <SeasonStatisticPicker title={selectorTitle} updateSeason={updateStandingsBySeason} />
            <CompetitionTable standings={standings} />
          </Stack>
        )}
      </Container>
    </OverviewLayout>
  );
};

export default StandingsArea;
