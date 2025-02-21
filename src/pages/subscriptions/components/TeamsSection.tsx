import { Checkbox, Table, Image, ScrollArea, Loader, Center, Group, Text } from "@mantine/core";
import { useFollowedTeams, useTeams } from "@hooks";

export interface TeamsProps {
  subscriptionId: number;
}

const TeamsSection: React.FC<TeamsProps> = ({ subscriptionId }) => {
  const { loading, teams } = useTeams(subscriptionId);
  const { followedTeams, subscribe, unsubscribe } = useFollowedTeams(subscriptionId);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  const rows = teams.map((team) => (
    <Table.Tr key={team.id}>
      <Table.Td>
        <Group>
          <Image w={25} src={team.logo} />
          <Text size="xs">{team.name}</Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group>
          <Checkbox
            aria-label="Follow team"
            checked={followedTeams.includes(team.id)}
            onChange={(event) => {
              if (event.currentTarget.checked) subscribe(team.id);
              else unsubscribe(team.id);
            }}
          />
          <Text size="xs">Follow</Text>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={400}>
      <Table>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};

export default TeamsSection;
