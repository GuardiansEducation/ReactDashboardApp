import { Checkbox, Table, Image } from "@mantine/core";
/* import { TeamsOperation } from "@operations"; */
import TeamsOperation from "../../operations/teamsOperation";
import { Team } from "@types";
import { useEffect, useState } from "react";

export interface TeamsProps {
  competitionId: number;
}

export const Teams: React.FC<TeamsProps> = ({ competitionId }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTeams(await TeamsOperation.execute(competitionId));
    };
    fetchData();
  }, []);

  const rows = teams.map((team) => (
    <Table.Tr
      key={team.id}
      bg={selectedRows.includes(team.id) ? "var(--mantine-color-blue-light)" : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(team.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, team.id]
                : selectedRows.filter((position) => position !== team.id)
            )
          }
        />
      </Table.Td>
      <Table.Td>
        <Image h={25} w="auto" fit="contain" src={team.logo} />
      </Table.Td>
      <Table.Td>{team.name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Club</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
