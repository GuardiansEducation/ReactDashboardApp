import { Text, Group, Grid, Tooltip, Stack } from "@mantine/core";
import { TeamMember } from "@types";
import { CountryFlag } from "@components";

export type SquadSectionProps = {
  squad: TeamMember[];
};

const SquadSection: React.FC<SquadSectionProps> = ({ squad }) => {
  const renderMember = (member: TeamMember) => {
    const { nationality, name, position } = member;

    return (
      <Group wrap="nowrap">
        <Tooltip label={nationality}>
          <CountryFlag countryFullName={nationality} />
        </Tooltip>
        <Stack gap={0}>
          <Text>
            {name}
          </Text>
          <Text c="dimmed" size="xs">
            {position}
          </Text>
        </Stack>
      </Group>
    )
  };

  return (
    <Grid gutter="xs">
      {squad.map((member, index) => (
        <Grid.Col key={index} span={{ base: 12, lg: 6 }}>
          {renderMember(member)}
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default SquadSection;
