import { Center, Flex } from "@mantine/core";
import { useAppSelector, useTeamData } from "@hooks";
import { CommonAlert, OverviewLoader } from "@components";
import TeamCard from "./components/TeamCard";
import OverviewLayout from "../OverviewLayout";

const FavoriteTeams: React.FC = () => {
  const favoriteTeams = useAppSelector(({ subscription }) => {
    const { subscriptions, selectedCompetitionCode } = subscription;
    const selectedCompetition = subscriptions.find(sub => sub.competition.code === selectedCompetitionCode);

    return selectedCompetition?.competition.teams || [];
  });
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const { loading, teamsData } = useTeamData(favoriteTeams);

  const loadingComponent = (
    <Flex align="center" justify="center" h="50vh">
      <OverviewLoader size={50} />
    </Flex>
  );

  const noTeamsComponent = (
    <Center mih="50vh">
      <CommonAlert message="No teams selected. Please, get back to the subscription page and tick some" />
    </Center>
  );

  const teamsComponent = (
    <Flex mt="md" justify="center" wrap="wrap" gap="md" direction={{ base: "column", lg: "row" }}>
      {teamsData.map(({ team, teamMatches }, index) => (
        <Flex key={index} flex={{ base: "1 1 100%", lg: "1 1 40%" }}>
          <TeamCard team={team} teamMatches={teamMatches} />
        </Flex>
      ))}
    </Flex>
  );

  const pageContentComponent = hasFavoriteTeams ? teamsComponent : noTeamsComponent;

  return (
    <OverviewLayout headerText="Favorite Team">
      {loading ? loadingComponent : pageContentComponent}
    </OverviewLayout>
  );
};

export default FavoriteTeams;
