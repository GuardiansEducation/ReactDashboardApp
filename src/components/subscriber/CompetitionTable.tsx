import React, { useCallback } from "react";
import { SubscribedCompetition } from "@types";
import { Table, Image, Button, MantineTheme, ScrollArea } from "@mantine/core";

export interface CompetitionTableProps {
  competitions: SubscribedCompetition[];
  subscribedCompetition?: SubscribedCompetition;
  onSubscribe: (item: SubscribedCompetition) => void;
  onUnsubscribe: (item: SubscribedCompetition) => void;
}

const subscribedTheme = (theme: MantineTheme) => ({
  background: theme.colors.red[1],
});

const notSubscribedTheme = (theme: MantineTheme) => ({
  background: theme.colors.blue[1],
});

const CompetitionTable: React.FC<CompetitionTableProps> = ({
  competitions,
  subscribedCompetition,
  onSubscribe,
  onUnsubscribe,
}) => {
  const getTheme = useCallback(
    (x: SubscribedCompetition) => {
      if (subscribedCompetition === undefined) {
        return {};
      }

      return x.id === subscribedCompetition.id ? subscribedTheme : notSubscribedTheme;
    },
    [subscribedCompetition]
  );

  const getSubscriptionButton = useCallback(
    (x: SubscribedCompetition) => {
      return x.id === subscribedCompetition?.id ? (
        <Button
          color="red"
          radius="xs"
          variant="outline"
          onClick={() => {
            onUnsubscribe(x);
          }}
        >
          Unsubscribe
        </Button>
      ) : (
        <Button
          radius="xs"
          variant="outline"
          onClick={() => {
            onSubscribe(x);
          }}
        >
          Subscribe
        </Button>
      );
    },
    [subscribedCompetition]
  );

  const rows = competitions.map((x) => (
    <Table.Tr key={x.id} style={getTheme(x)}>
      <Table.Td>{x.name}</Table.Td>
      <Table.Td>{x.code}</Table.Td>
      <Table.Td>
        <Image h={50} w="auto" fit="contain" src={x.emblem} />
      </Table.Td>
      <Table.Td>{getSubscriptionButton(x)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={250} offsetScrollbars>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Code</Table.Th>
            <Table.Th>Emblem</Table.Th>
            <Table.Th>Options</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};

export default CompetitionTable;
