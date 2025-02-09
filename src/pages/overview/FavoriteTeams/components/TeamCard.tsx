import { Card } from "@mantine/core";
import { TeamListItem, TeamMatches } from "@types";
import CardHeader from "./CardHeader";
import CardAccordion from "./CardAccordion";

export type TeamCardProps = {
  team: TeamListItem;
  matches: TeamMatches;
};

const TeamCard: React.FC<TeamCardProps> = ({ team, matches }) => {
  return (
    <Card shadow="sm" radius="md" mt="md" withBorder>
      <CardHeader team={team} />
      <CardAccordion team={team} matches={matches} />
    </Card>
  );
};

export default TeamCard;
