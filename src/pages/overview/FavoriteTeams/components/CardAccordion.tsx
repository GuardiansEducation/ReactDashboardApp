import { useState } from "react";
import { Text, Group, Accordion, Flex, Tooltip, ActionIcon } from "@mantine/core";
import { TeamListItem, TeamMatches } from "@types";
import {
  IconUsersGroup, IconTournament, IconCalendarWeek,
  IconCalendarCheck, IconSoccerField, IconColumns
} from "@tabler/icons-react";

import CompetitionsSection from "./sections/CompetitionsSection";
import UpcomingMatchesSection from "./sections/UpcomingMatchesSection";
import PlayedMatchesSection from "./sections/PlayedMatchesSection";
import SquadSection from "./sections/SquadSection";
import { SquadOnFieldSection } from "./sections/SquadOnFieldSection";

export type CardAccordionProps = {
  team: TeamListItem;
  teamMatches: TeamMatches
};

type AccordionItemData = {
  id: string;
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
  controls?: React.ReactNode[];
}

const CardAccordion: React.FC<CardAccordionProps> = ({ team, teamMatches }) => {
  const { runningCompetitions, coach, squad } = team;
  const { resultSet, matches } = teamMatches;

  const [showSquadOnField, setShowSquadOnField] = useState(true);

  const toggleSquadView = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowSquadOnField(!showSquadOnField);
  };

  const squadViewToggle = (
    <Tooltip label="Toggle squad view" key="toggle_squad_view">
      <ActionIcon component="div" onClick={toggleSquadView} variant="outline" my={-5}>
        {showSquadOnField ? <IconColumns stroke={2} /> : <IconSoccerField stroke={2} />}
      </ActionIcon>
    </Tooltip>
  );

  const accordionItems: AccordionItemData[] = [
    {
      id: 'competitions',
      icon: <IconTournament />,
      label: 'Running competitions',
      content: <CompetitionsSection competitions={runningCompetitions} results={resultSet} />,
    },
    {
      id: 'upcoming_matches',
      icon: <IconCalendarWeek />,
      label: 'Upcoming matches',
      content: <UpcomingMatchesSection matches={matches} />,
    },
    {
      id: 'played_matches',
      icon: <IconCalendarCheck />,
      label: 'Played matches',
      content: <PlayedMatchesSection matches={matches} />,
    },
    {
      id: 'squad',
      icon: <IconUsersGroup />,
      label: 'Squad',
      content: (
        showSquadOnField
          ? <SquadOnFieldSection squad={squad} coach={coach}/>
          : <SquadSection squad={squad} coach={coach} />
      ),
      controls: [squadViewToggle],
    },
  ]

  return (
    <Accordion variant="contained" radius="md" chevronPosition="left" defaultValue="upcoming_matches">
      {accordionItems.map((item) => (
        <Accordion.Item value={item.id} key={item.label}>
          <Accordion.Control>
            <Group wrap="nowrap">
              {item.icon}
              <Text>{item.label}</Text>
              <Flex justify="flex-end" flex={1}>
                <ActionIcon.Group>
                  {item.controls}
                </ActionIcon.Group>
              </Flex>
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
