import { Text, Group, Grid, Tooltip, Stack } from "@mantine/core";
import { TeamCoach, TeamMember } from "@types";
import { CountryFlag } from "@components";
import CoachingSection from "./CoachingSection";

export type SquadSectionProps = {
  squad: TeamMember[];
  coach: TeamCoach;
};

const SquadSection: React.FC<SquadSectionProps> = ({ squad, coach }) => {
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
    <>
      <CoachingSection coach={coach} />
      <Grid gutter="xs">
        {squad.map((member, index) => (
          <Grid.Col key={index} span={{ base: 12, lg: 6 }}>
            {renderMember(member)}
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default SquadSection;
