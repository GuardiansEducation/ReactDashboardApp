import { Text, Group, Accordion } from "@mantine/core";
import { TeamListItem, TeamMatches } from "@types";
import { IconUsersGroup, IconTournament, IconCalendarWeek, IconCalendarCheck } from "@tabler/icons-react";

import CompetitionsSection from "./sections/CompetitionsSection";
import StatisticSection from "./sections/StatisticSection";
import UpcomingMatchesSection from "./sections/UpcomingMatchesSection";
import PlayedMatchesSection from "./sections/PlayedMatchesSection";
import CoachingSection from "./sections/CoachingSection";
import SquadSection from "./sections/SquadSection";

export type CardAccordionProps = {
  team: TeamListItem;
  teamMatches: TeamMatches
};

const CardAccordion: React.FC<CardAccordionProps> = ({ team, teamMatches }) => {
  const { runningCompetitions, coach, squad } = team;
  const { resultSet, matches } = teamMatches;

  const accordionItems = [
    {
      id: 'competitions',
      icon: <IconTournament />,
      label: 'Running competitions',
      content: <>
        <CompetitionsSection competitions={runningCompetitions} />
        <StatisticSection results={resultSet} />
      </>,
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
      content: <>
        <CoachingSection coach={coach} />
        <SquadSection squad={squad} />
      </>,
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
