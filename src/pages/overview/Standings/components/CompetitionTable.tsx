import { Stack, Table } from "@mantine/core";
import { standingsTHead } from "@constants";
import Club from "./Club";
import Streak from "./Streak";
import { Standings } from "../../../../types/api/Standings";

export type CompetitionTableProps = {
  standing: Standings;
};

const CompetitionTable: React.FC<CompetitionTableProps> = ({ standing }) => {
  return (
    <Stack align="stretch" justify="center" gap="xs">
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            {standingsTHead.map((col) => (
              <Table.Th
                key={col.label}
                ta={col.style?.textAlign}
                c={col.style?.color}
                fw={col.style?.fontWeight}
              >
                {col.label}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {standing.table.map((element) => (
            <Table.Tr key={element.team.name}>
              <Table.Td>{element.position}</Table.Td>
              <Table.Td>
                <Club team={element.team} />
              </Table.Td>
              <Table.Td ta={"center"}>{element.playedGames}</Table.Td>
              <Table.Td ta={"center"}>{element.won}</Table.Td>
              <Table.Td ta={"center"}>{element.draw}</Table.Td>
              <Table.Td ta={"center"}>{element.lost}</Table.Td>
              <Table.Td ta={"center"}>{element.goalsFor}</Table.Td>
              <Table.Td ta={"center"}>{element.goalsAgainst}</Table.Td>
              <Table.Td ta={"center"}>{element.goalDifference}</Table.Td>
              <Table.Td ta={"center"}>{element.points}</Table.Td>
              <Table.Td ta={"center"}>
                {element.form ? <Streak streak={element.form} /> : "No data"}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};

export default CompetitionTable;
