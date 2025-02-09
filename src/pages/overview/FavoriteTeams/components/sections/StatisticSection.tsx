import { Table } from "@mantine/core";
import { TeamMatchResultSet } from "@types";

export type StatisticSectionProps = {
  results: TeamMatchResultSet;
};

const StatisticSection: React.FC<StatisticSectionProps> = ({ results }) => {
  return (
    <Table withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th ta="center">Total matches</Table.Th>
          <Table.Th ta="center">Matches played</Table.Th>
          <Table.Th ta="center">Wins</Table.Th>
          <Table.Th ta="center">Draws</Table.Th>
          <Table.Th ta="center">Losses</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr ta="center">
          <Table.Td>{results.count}</Table.Td>
          <Table.Td>{results.played}</Table.Td>
          <Table.Td>{results.wins}</Table.Td>
          <Table.Td>{results.draws}</Table.Td>
          <Table.Td>{results.losses}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};

export default StatisticSection;
