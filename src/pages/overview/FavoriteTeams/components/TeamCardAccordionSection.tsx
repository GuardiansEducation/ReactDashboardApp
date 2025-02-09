import { Text, Group, Accordion, useMantineTheme, Grid } from "@mantine/core";
import { TeamListItem } from "@types";
import { IconBrain, IconUsersGroup } from "@tabler/icons-react";
import TeamCardSquadMember from "./TeamCardSquadMember";
import TeamCardCoachingSection from "./TeamCardCoachingSection";

export type TeamCardAccordionSectionProps = {
  team: TeamListItem;
};

const TeamCardAccordionSection: React.FC<TeamCardAccordionSectionProps> = ({ team }) => {
  const theme = useMantineTheme();

  const squadList = (
    <Grid gutter="xs">
      {team.squad.map((member, index) => (
        <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
          <TeamCardSquadMember member={member} />
        </Grid.Col>
      ))}
    </Grid>
  )

  const coaching = (
    <TeamCardCoachingSection coach={team.coach} />
  )

  const accordionItems = [
    {
      id: 'squad',
      icon: <IconUsersGroup />,
      label: 'Squad',
      content: squadList,
    },
    {
      id: 'coaching',
      icon: <IconBrain />,
      label: 'Coaching',
      content: coaching,
    }
  ]

  return (
    <Accordion variant="separated" radius="md">
      {accordionItems.map((item) => (
        <Accordion.Item value={item.id} key={item.label} bg={theme.colors.gray[8]}>
          <Accordion.Control>
            <Group wrap="nowrap">
              {item.icon}
              <Text>{item.label}</Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            {item.content}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default TeamCardAccordionSection;
