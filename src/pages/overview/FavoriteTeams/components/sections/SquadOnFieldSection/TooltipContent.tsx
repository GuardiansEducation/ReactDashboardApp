import { Center, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { TeamMember, TeamMemberPosition } from "@types";
import { CountryFlag } from "@components";

export type TooltipContentProps = {
  position: TeamMemberPosition;
  members?: TeamMember[];
};

const TooltipContent: React.FC<TooltipContentProps> = ({ position, members = [] }) => {
  const columnCount = members.length > 3 ? 2 : 1;

  return (
    <Stack gap={0}>
      <Center>
        <Text fw="bold">{position}</Text>
      </Center>
      <SimpleGrid cols={columnCount} spacing="xs" verticalSpacing={0}>
        {members.map((member, index) => (
          <Group key={index} wrap="nowrap" gap={5}>
            <CountryFlag countryFullName={member.nationality} />
            <Text>{member.name}</Text>
          </Group>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TooltipContent;
