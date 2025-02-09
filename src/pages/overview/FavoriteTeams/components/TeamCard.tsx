import { Card, Divider, Flex } from "@mantine/core";
import { TeamListItem } from "@types";
import TeamCardLogoSection from "./TeamCardLogoSection";
import TeamCardCoachingSection from "./TeamCardCoachingSection";
import TeamCardCompetitionsSection from "./TeamCardCompetitionsSection";
import TeamCardAccordionSection from "./TeamCardAccordionSection";

export type TeamCardProps = {
  team: TeamListItem;
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Card shadow="sm" radius="md" mt="md" withBorder>
      <Flex justify="space-evenly" wrap="wrap">
        <TeamCardLogoSection team={team} />
        <TeamCardCoachingSection coach={team.coach} />
        <TeamCardCompetitionsSection competitions={team.runningCompetitions} />
      </Flex>
      <Divider my="sm" />
      <TeamCardAccordionSection team={team} />
    </Card>
  );
};

export default TeamCard;
