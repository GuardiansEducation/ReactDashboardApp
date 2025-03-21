import { Card } from "@mantine/core";
import { TeamListItem, TeamMatches } from "@types";
import CardHeader from "./CardHeader";
import CardAccordion from "./CardAccordion";

export type TeamCardProps = {
  team: TeamListItem;
  teamMatches: TeamMatches;
};

const TeamCard: React.FC<TeamCardProps> = ({ team, teamMatches }) => {
  return (
    <Card shadow="sm" withBorder p="sm" w="100%">
      <CardHeader team={team} />
      <CardAccordion team={team} teamMatches={teamMatches} />
    </Card>
  );
};

export default TeamCard;
