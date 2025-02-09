import { Text, Group, Accordion } from "@mantine/core";
import { TeamListItem } from "@types";
import { IconBrain, IconUsersGroup, IconTournament } from "@tabler/icons-react";
import CoachingSection from "./sections/CoachingSection";
import SquadSection from "./sections/SquadSection";
import CompetitionsSection from "./sections/CompetitionsSection";

export type CardAccordionProps = {
  team: TeamListItem;
};

const CardAccordion: React.FC<CardAccordionProps> = ({ team }) => {
  const squadContent = <SquadSection squad={team.squad} />
  const coachingContent = <CoachingSection coach={team.coach} />
  const competitionsContent = <CompetitionsSection competitions={team.runningCompetitions} />

  const accordionItems = [
    {
      id: 'competitions',
      icon: <IconTournament />,
      label: 'Running competitions',
      content: competitionsContent,
    },
    {
      id: 'coaching',
      icon: <IconBrain />,
      label: 'Coaching',
      content: coachingContent,
    },
    {
      id: 'squad',
      icon: <IconUsersGroup />,
      label: 'Squad',
      content: squadContent,
    },
  ]

  return (
    <Accordion variant="contained" radius="md" chevronPosition="left">
      {accordionItems.map((item) => (
        <Accordion.Item value={item.id} key={item.label}>
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

export default CardAccordion;
