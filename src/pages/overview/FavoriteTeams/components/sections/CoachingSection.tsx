import { Text, Group, Tooltip, Grid } from "@mantine/core";
import { TeamCoach } from "@types";
import { CountryFlag } from "@components";

export type CoachingSectionProps = {
  coach: TeamCoach;
};

const CoachingSection: React.FC<CoachingSectionProps> = ({ coach }) => {
  const getCoachContractDates = (coach: TeamCoach) => {
    const startYear = coach.contract.start.split("-")[0];
    const endYear = coach.contract.until.split("-")[0];

    const result = `${startYear} - ${endYear}`;

    return result;
  }

  return (
    <Grid>
      <Grid.Col span="content">
        <Text fw={700}>Team coach:</Text>
        <Text fw={700}>Date of birth:</Text>
        <Text fw={700}>Coach contract:</Text>
      </Grid.Col>
      <Grid.Col span="content">
        <Group align="baseline" wrap="nowrap">
          <Text>{coach.name}</Text>
          <Tooltip label={coach.nationality}>
            <CountryFlag countryFullName={coach.nationality} />
          </Tooltip>
        </Group>
        <Text>{coach.dateOfBirth}</Text>
        <Text>{getCoachContractDates(coach)}</Text>
      </Grid.Col>
    </Grid>
  );
};

export default CoachingSection;
