import { Table, Image, Loader, Center, Group, Text, Pagination, Stack } from "@mantine/core";
import { useFollowedTeams, useTeams } from "@hooks";
import { useCallback, useState } from "react";
import { SubscribedTeam } from "@types";
import UnsubscribeButton from "./UnsubscribeButton";
import SubscribeButton from "./SubscribeButton";

const pageSize = 8;
const initialPage = 1;

export interface TeamsProps {
  subscriptionId: number;
}

const TeamsSection: React.FC<TeamsProps> = ({ subscriptionId }) => {
  const [page, setPage] = useState(initialPage);
  const { loading, teams } = useTeams(subscriptionId);
  const { followedTeams, subscribe, unsubscribe } = useFollowedTeams(subscriptionId);

  const totalPages = Math.ceil(teams.length / pageSize);
  const currentPageTeams = teams.slice((page - 1) * pageSize, page * pageSize);

  const getSubscriptionButton = useCallback(
    (team: SubscribedTeam) => {
      if (followedTeams.includes(team.id)) {
        return (
          <UnsubscribeButton
            onClick={() => {
              unsubscribe(team);
            }}
          />
        );
      }

      return (
        <SubscribeButton
          onClick={() => {
            subscribe(team);
          }}
        />
      );
    },
    [followedTeams, subscribe, unsubscribe]
  );

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack mih={385} justify="space-between">
      <Table>
        <Table.Tbody>
          {currentPageTeams.map((x) => (
            <Table.Tr key={x.id}>
              <Table.Td>
                <Group>
                  <Image w={25} src={x.logo} />
                  <Text size="xs">{x.name}</Text>
                </Group>
              </Table.Td>
              <Table.Td ta="center" w="33%">
                {getSubscriptionButton(x)}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Center>
        <Pagination
          total={totalPages}
          value={page}
          onChange={setPage}
          color="orange"
          withControls={false}
        />
      </Center>
    </Stack>
  );
};

export default TeamsSection;
