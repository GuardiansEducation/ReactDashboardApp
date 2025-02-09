import { Card, Divider, Flex } from "@mantine/core";
import { TeamListItem } from "@types";
import CardHeader from "./CardHeader";
import CardAccordion from "./CardAccordion";

export type TeamCardProps = {
  team: TeamListItem;
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Card shadow="sm" radius="md" mt="md" withBorder>
      <CardHeader team={team} />
      <Divider my="sm" />
      <CardAccordion team={team} />
    </Card>
  );
};

export default TeamCard;
