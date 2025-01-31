import { Checkbox, Table, Image, ScrollArea, Loader, Center } from "@mantine/core";
import { Team } from "@types";
import { useFollowedTeams, useTeams } from "@hooks";

export interface TeamsProps {
  subscriptionId: number;
}

export const Teams: React.FC<TeamsProps> = ({ subscriptionId }) => {
  const { teams, isLoading } = useTeams(subscriptionId);
  const { subscribeCompetitionTeam, unsubscribeCompetitionTeam, followedTeams } =
    useFollowedTeams(subscriptionId);

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  const rows = teams.map((team) => (
    <Table.Tr
      key={team.id}
      bg={followedTeams.includes(team.id) ? "var(--mantine-color-blue-light)" : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select team"
          checked={followedTeams.includes(team.id)}
          onChange={(event) => {
            if (event.currentTarget.checked) subscribeCompetitionTeam(team.id);
            else unsubscribeCompetitionTeam(team.id);
          }}
        />
      </Table.Td>
      <Table.Td>
        <Image h={25} w="auto" fit="contain" src={team.logo} />
      </Table.Td>
      <Table.Td>{team.name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={400}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Follow</Table.Th>
            <Table.Th>Club</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
