import { Text, Group, Accordion } from "@mantine/core";
import { TeamListItem, TeamMatches } from "@types";
import { IconBrain, IconUsersGroup, IconTournament, IconCalendarWeek, IconProgressCheck, IconCalendarCheck } from "@tabler/icons-react";
import CoachingSection from "./sections/CoachingSection";
import SquadSection from "./sections/SquadSection";
import CompetitionsSection from "./sections/CompetitionsSection";
import UpcomingMatchesSection from "./sections/UpcomingMatchesSection";
import StatisticSection from "./sections/StatisticSection";
import PlayedMatchesSection from "./sections/PlayedMatchesSection";

export type CardAccordionProps = {
  team: TeamListItem;
  matches: TeamMatches
};

const CardAccordion: React.FC<CardAccordionProps> = ({ team, matches }) => {
  const competitionsContent = <CompetitionsSection competitions={team.runningCompetitions} />
  const statisticContent = <StatisticSection results={matches.resultSet} />
  const upcomingMatchesContent = <UpcomingMatchesSection matches={matches} />
  const playedMatchesContent = <PlayedMatchesSection matches={matches} />
  const coachingContent = <CoachingSection coach={team.coach} />
  const squadContent = <SquadSection squad={team.squad} />

  const accordionItems = [
    {
      id: 'competitions',
      icon: <IconTournament />,
      label: 'Running competitions',
      content: competitionsContent,
    },
    {
      id: 'statistic',
      icon: <IconProgressCheck />,
      label: 'Competitions statistic',
      content: statisticContent,
    },
    {
      id: 'upcoming_matches',
      icon: <IconCalendarWeek />,
      label: 'Upcoming matches',
      content: upcomingMatchesContent,
    },
    {
      id: 'played_matches',
      icon: <IconCalendarCheck />,
      label: 'Played matches',
      content: playedMatchesContent,
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
