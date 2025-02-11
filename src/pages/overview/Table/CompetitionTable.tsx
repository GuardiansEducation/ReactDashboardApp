import { Stack, Table } from "@mantine/core";
import Club from "./Club";
import { standingsTHead } from "@constants";
import { TableAreaProps } from "./TableAreaProps";
import Streak from "./Streak";

const headerStyle = { color: "gray", fontWeight: "bold" };

const CompetitionTable: React.FC<TableAreaProps> = ({ standings }) => {
  return (
    <Stack align="stretch" justify="center" gap="xs">
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            {standingsTHead.map((col) => (
              <Table.Th key={col} style={headerStyle}>
                {col}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {standings?.standings[0].table.map((element) => (
            <Table.Tr key={element.team.name}>
              <Table.Td>{element.position}</Table.Td>
              <Table.Td>
                <Club team={element.team} />
              </Table.Td>
              <Table.Td>{element.playedGames}</Table.Td>
              <Table.Td>{element.won}</Table.Td>
              <Table.Td>{element.draw}</Table.Td>
              <Table.Td>{element.lost}</Table.Td>
              <Table.Td>{element.goalsFor}</Table.Td>
              <Table.Td>{element.goalsAgainst}</Table.Td>
              <Table.Td>{element.goalDifference}</Table.Td>
              <Table.Td>{element.points}</Table.Td>
              <Table.Td>{element.form ? <Streak streak={element.form} /> : "No data"}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};

export default CompetitionTable;
