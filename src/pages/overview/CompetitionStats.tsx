import { Stack, Table, Progress, Group } from "@mantine/core";

const CompetitionStats: React.FC = () => {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack align="stretch" justify="center" gap="xs">
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        <Table.Caption>
          <Group grow gap={5} mt="xs">
            <Progress
              transitionDuration={0}
              radius="xs"
              size="xs"
              value={100}
              color="orange"
            ></Progress>
            <Progress
              transitionDuration={0}
              radius="xs"
              size="xs"
              value={100}
              color="orange"
            ></Progress>
            <Progress
              transitionDuration={0}
              radius="xs"
              size="xs"
              value={0}
              color="orange"
            ></Progress>
          </Group>
        </Table.Caption>
      </Table>
    </Stack>
  );
};

export default CompetitionStats;
