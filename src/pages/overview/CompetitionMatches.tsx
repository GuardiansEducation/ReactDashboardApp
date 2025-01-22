import { Stack, Table, Progress, Group } from "@mantine/core";

const CompetitionMatches: React.FC = () => {
  const elements = [
    { position: 3, mass: 6.94, symbol: "Li", name: "Lithium" },
    { position: 4, mass: 9.0122, symbol: "Be", name: "Beryllium" },
    { position: 11, mass: 22.99, symbol: "Na", name: "Sodium" },
    { position: 12, mass: 24.305, symbol: "Mg", name: "Magnesium" },
    { position: 19, mass: 39.098, symbol: "K", name: "Potassium" },
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
              value={100}
              color="orange"
            ></Progress>
          </Group>
        </Table.Caption>
      </Table>
    </Stack>
  );
};

export default CompetitionMatches;
