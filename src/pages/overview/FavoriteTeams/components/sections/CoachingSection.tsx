import { Text, Group, Tooltip, Paper, Grid, Divider } from "@mantine/core";
import { TeamCoach } from "@types";
import { CountryFlag } from "@components";

export type CoachingSectionProps = {
  coach: TeamCoach;
};

const CoachingSection: React.FC<CoachingSectionProps> = ({ coach }) => {
  const { contract, name, nationality } = coach;

  const contractStartDate = contract.start.split("-")[0];
  const contractEndDate = contract.until.split("-")[0];

  const coachName = (
    <Group align="baseline" wrap="nowrap" justify="center">
      <Text ta="center" size="sm">
        {name}
      </Text>
      <Tooltip label={nationality}>
        <CountryFlag countryFullName={nationality} />
      </Tooltip>
    </Group>
  )

  const contractDates = (
    <Text ta="center" size="sm">
      {contractStartDate} - {contractEndDate}
    </Text>
  )

  return (
    <Paper mb="md" px="sm" shadow="xs">
      <Grid gutter="md">
        <Grid.Col span={6}>
          <Text ta="center" fw="bold" size="sm">
            Team coach
          </Text>
          <Divider my="xs" />
          {coachName}
        </Grid.Col>
        <Grid.Col span={6}>
          <Text ta="center" fw="bold" size="sm">
            Coach contract
          </Text>
          <Divider my="xs" />
          {contractDates}
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default CoachingSection;
