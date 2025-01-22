import { Stack, Table, Progress, Group } from "@mantine/core";

const CompetitionTable: React.FC = () => {
  const elements = [
    { position: 1, mass: 1.008, symbol: "H", name: "Hydrogen" },
    { position: 2, mass: 4.0026, symbol: "He", name: "Helium" },
    { position: 8, mass: 15.999, symbol: "O", name: "Oxygen" },
    { position: 10, mass: 20.18, symbol: "Ne", name: "Neon" },
    { position: 12, mass: 24.305, symbol: "Mg", name: "Magnesium" },
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
              radius="xs"
              size="xs"
              transitionDuration={0}
              value={100}
              color="orange"
            ></Progress>
            <Progress
              radius="xs"
              size="xs"
              transitionDuration={0}
              value={0}
              color="orange"
            ></Progress>
            <Progress
              radius="xs"
              size="xs"
              transitionDuration={0}
              value={0}
              color="orange"
            ></Progress>
          </Group>
        </Table.Caption>
      </Table>
    </Stack>
  );
};

export default CompetitionTable;
