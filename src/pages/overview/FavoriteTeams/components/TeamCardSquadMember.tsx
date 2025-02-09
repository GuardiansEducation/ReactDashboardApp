import { Text, Stack, Group, Tooltip } from "@mantine/core";
import { TeamMember } from "@types";
import { CountryFlag } from "@components";

export type TeamCardSquadMemberProps = {
  member: TeamMember;
};

const TeamCardSquadMember: React.FC<TeamCardSquadMemberProps> = ({ member }) => {
  return (
    <Group wrap="nowrap">
      <Tooltip label={member.nationality}>
        <CountryFlag countryFullName={member.nationality} />
      </Tooltip>
      <Stack gap={0}>
        <Text>{member.name}</Text>
        <Text c="dimmed" size="xs">{member.position}</Text>
      </Stack>
    </Group>
  );
};

export default TeamCardSquadMember;
