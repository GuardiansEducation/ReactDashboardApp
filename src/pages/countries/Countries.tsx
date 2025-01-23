import React, { useCallback, useState } from "react";
import { Image, Select, Table } from "@mantine/core";
import { useAppDispatch } from "@hooks";
import { CompetitionList } from "@types";
import { CompetitionsService } from "@services";

const Countries: React.FC = () => {
  const dispatch = useAppDispatch();
  const [competitions, setCompetitions] = useState<CompetitionList | null>(
    null
  );

  var handleAreaChanged = useCallback(async (areaId: string | null) => {
    if (areaId == null) {
      return;
    }

    const competitions = await CompetitionsService.list_area_competitions(
      +areaId
    );
    setCompetitions(competitions);
  }, []);

  const rows = competitions?.competitions.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.code}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.currentSeason.startDate}</Table.Td>
      <Table.Td>{element.currentSeason.endDate}</Table.Td>
      <Table.Td>{element.currentSeason.currentMatchday}</Table.Td>
      <Table.Td>
        <Image radius="sm" src={element.emblem} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Select
        data={[
          { value: "2088", label: "React" },
          { value: "2077", label: "Angular" },
        ]}
        onChange={handleAreaChanged}
      />
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Code</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Start date</Table.Th>
            <Table.Th>End date</Table.Th>
            <Table.Th>Matchday</Table.Th>
            <Table.Th>Emblem</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        <Table.Caption>Scroll page to see sticky thead</Table.Caption>
      </Table>
    </>
  );
};

export default Countries;
