import { Text, Group, Grid, Tooltip, Stack } from "@mantine/core";
import { TeamMember } from "@types";
import { CountryFlag } from "@components";

export type SquadSectionProps = {
  squad: TeamMember[];
};

const SquadSection: React.FC<SquadSectionProps> = ({ squad }) => {
  const renderMember = (member: TeamMember) => (
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

  return (
    <Grid gutter="xs">
      {squad.map((member, index) => (
        <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
          {renderMember(member)}
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default SquadSection;
