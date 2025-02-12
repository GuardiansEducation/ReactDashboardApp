import { useState } from "react";
import { Text, Image, Table, Flex, Stack, Center, Pagination } from "@mantine/core";
import { TeamMatch, TeamMatchStatus } from "@types";

export type UpcomingMatchesSectionProps = {
  matches: TeamMatch[];
};

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 5;

const UpcomingMatchesSection: React.FC<UpcomingMatchesSectionProps> = ({ matches }) => {
  const [page, setPage] = useState(INITIAL_PAGE);

  const filteredMatches = matches.filter((match) =>
    match.status === TeamMatchStatus.Scheduled || match.status === TeamMatchStatus.Timed
  );
  const currentPageMatches = filteredMatches.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filteredMatches.length / ITEMS_PER_PAGE);

  const rows = currentPageMatches.map(({ utcDate, homeTeam, awayTeam }, index) => {
    const matchDate = new Date(utcDate).toLocaleDateString();
    const matchTime = new Date(utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
      <Table.Tr key={index}>
        <Table.Td ta="center" p={3}>
          <Text>
            {matchDate}
          </Text>
        </Table.Td>
        <Table.Td p={3}>
          <Flex align="center" justify="flex-end">
            <Text mr="xs" ta="right">
              {homeTeam.shortName}
            </Text>
            <Image src={homeTeam.crest} h={30} />
          </Flex>
        </Table.Td>
        <Table.Td ta="center" p={0}>
          <Text>
            {matchTime}
          </Text>
        </Table.Td>
        <Table.Td p={3}>
          <Flex align="center" justify="flex-start">
            <Image src={awayTeam.crest} h={30} />
            <Text ml="xs" ta="left">
              {awayTeam.shortName}
            </Text>
          </Flex>
        </Table.Td>
      </Table.Tr>
    )
  });

  return (
    <Stack>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta="center" w="23%">Date</Table.Th>
            <Table.Th ta="right" w="33%">Home team</Table.Th>
            <Table.Th ta="center" p={0} w="11%">Time</Table.Th>
            <Table.Th ta="left" w="33%">Guest team</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
      <Center>
        <Pagination
          total={totalPages}
          value={page}
          onChange={setPage}
          radius="md"
          color="orange"
          withControls={false}
        />
      </Center>
    </Stack>
  );
};

export default UpcomingMatchesSection;
