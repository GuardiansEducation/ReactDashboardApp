import React from "react";
import { Table, Image, Button, MantineTheme } from "@mantine/core";
import { CompetitionListItem, SubscribedCompetition } from "@types";

export interface CompetitionTableProps {
  competitions: CompetitionListItem[];
  subscribedCompetition?: SubscribedCompetition;
  onSubscribe: (item: CompetitionListItem) => void;
}

const defaultTheme = (theme: MantineTheme) => ({});

const subscribedTheme = (theme: MantineTheme) => ({
  background: theme.colors.red[3],
});

const notSubscribedTheme = (theme: MantineTheme) => ({
  background: theme.colors.gray[6],
});

const CompetitionTable: React.FC<CompetitionTableProps> = ({
  competitions,
  subscribedCompetition,
  onSubscribe,
}) => {
  const getTheme = (x: CompetitionListItem) => {
    if (subscribedCompetition === undefined) {
      return defaultTheme;
    }

    return x.id == subscribedCompetition.id ? subscribedTheme : notSubscribedTheme;
  };

  const rows = competitions.map((x) => (
    <Table.Tr key={x.id} style={getTheme(x)}>
      <Table.Td>{x.name}</Table.Td>
      <Table.Td>{x.code}</Table.Td>
      <Table.Td>{x.type}</Table.Td>
      <Table.Td>
        <Image h={50} w="auto" fit="contain" src={x.emblem} />
      </Table.Td>
      <Table.Td>
        <Button
          onClick={() => {
            onSubscribe(x);
          }}
        >
          Subscribe
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Code</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Emblem</Table.Th>
            <Table.Th>Options</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default CompetitionTable;
