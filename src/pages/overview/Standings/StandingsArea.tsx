import { Container, Flex, Stack } from "@mantine/core";
import CompetitionTable from "./components/CompetitionTable";
import { useAppSelector, useSeasonStandings } from "@hooks";
import { CustomLoader } from "@components";
import SeasonStatisticPicker from "../Stats/components/SeasonStatisticPicker";
import SeasonStatisticPickerTitle from "../Stats/components/SeasonStatisticPickerTitle";
import OverviewLayout from "../OverviewLayout";

const StandingsArea: React.FC = () => {
  const selectedOverviewCode = useAppSelector((state) => state.subscription.selectedCompetitionCode);

  const { selectedSeason, updateStandingsBySeason } = useSeasonStandings(selectedOverviewCode);

  const selectorTitle = (
    <SeasonStatisticPickerTitle title={`${selectedSeason?.startDate} - ${selectedSeason?.endDate}`} />
  );

  return (
    <OverviewLayout headerText="Team Standings">
      <Container fluid>
        {!selectedSeason?.standing || !selectedOverviewCode ? (
          <Flex justify="center" align="center" mih="50vh">
            <CustomLoader size={50} />
          </Flex>
        ) : (
          <Stack justify="space-between" mt="md" mb="xs">
            <SeasonStatisticPicker title={selectorTitle} updateSeason={updateStandingsBySeason} />
            <CompetitionTable standing={selectedSeason.standing} />
          </Stack>
        )}
      </Container>
    </OverviewLayout>
  );
};

export default StandingsArea;
