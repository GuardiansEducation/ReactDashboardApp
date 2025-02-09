import { Text, Image, Table, Flex } from "@mantine/core";
import { TeamMatches } from "@types";

export type PlayedMatchesSectionProps = {
  matches: TeamMatches;
};

const PlayedMatchesSection: React.FC<PlayedMatchesSectionProps> = ({ matches }) => {
  const filteredMatches = matches.matches.filter((match) => match.status !== "SCHEDULED" && match.status !== "TIMED");

  const rows = filteredMatches.map((match, index) => (
    <Table.Tr key={index}>
      <Table.Td ta="center" p={0}>
        <Text>{index + 1}</Text>
      </Table.Td>
      <Table.Td ta="center">
        <Text>{new Date(match.utcDate).toLocaleDateString()}</Text>
      </Table.Td>
      <Table.Td>
        <Flex align="center" justify="flex-end">
          <Text mr="xs" ta="right">{match.homeTeam.shortName}</Text>
          <Image src={match.homeTeam.crest} h={20} />
        </Flex>
      </Table.Td>
      <Table.Td ta="center" p={0}>
        <Text fw={700}>{match.score.fullTime.home} : {match.score.fullTime.away}</Text>
      </Table.Td>
      <Table.Td>
        <Flex align="center" justify="flex-start">
          <Image src={match.awayTeam.crest} h={20} />
          <Text ml="xs" ta="left">{match.awayTeam.shortName}</Text>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th ta="center" p={0}>#</Table.Th>
          <Table.Th ta="center">Date</Table.Th>
          <Table.Th ta="right">Home team</Table.Th>
          <Table.Th ta="center" p={0}>Score</Table.Th>
          <Table.Th ta="left">Guest team</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows}
      </Table.Tbody>
    </Table>
  );
};

export default PlayedMatchesSection;
