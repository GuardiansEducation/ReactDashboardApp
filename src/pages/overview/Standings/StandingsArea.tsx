import { Container, Image, Stack } from "@mantine/core";
import CompetitionTable from "./CompetitionTable";
import { SubscribedCompetition } from "@types";
import { useAppSelector } from "@hooks";
import SeasonStatisticPicker from "../Stats/SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "../Stats/SeasonStatisticPickerTitle";
import OverviewLoader from "../../../components/shared/OverviewLoader";
import { useStandings } from "../../../hooks/Standings/useStandings";
import { useSeasonDates } from "../../../hooks/Standings/useSeasonDates";

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
    <Container fluid>
      {standings === undefined || !selectedOverview ? (
        <OverviewLoader size={50} />
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
  );
};

export default StandingsArea;
