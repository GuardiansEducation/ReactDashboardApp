import { Title, Text, Stack, Group, SimpleGrid, Center, Tooltip } from "@mantine/core";
import { TeamCoach } from "@types";
import { CountryFlag } from "@components";

export type TeamCardCoachingSectionProps = {
  coach: TeamCoach;
};

const TeamCardCoachingSection: React.FC<TeamCardCoachingSectionProps> = ({ coach }) => {
  const getCoachContractDates = (coach: TeamCoach) => {
    const startYear = coach.contract.start.split("-")[0];
    const endYear = coach.contract.until.split("-")[0];

    const result = `${startYear} - ${endYear}`;

    return result;
  }

  return (
    <Stack m="sm">
      <Center>
        <Title size="h5">Coaching</Title>
      </Center>
      <SimpleGrid cols={2} spacing="xs">
        <Text ta="right" fw={700}>Team coach:</Text>
        <Group align="baseline" wrap="nowrap">
          <Text>{coach.name}</Text>
          <Tooltip label={coach.nationality}>
            <CountryFlag countryFullName={coach.nationality} />
          </Tooltip>
        </Group>
        <Text ta="right" fw={700}>Date of birth:</Text>
        <Text>{coach.dateOfBirth}</Text>
        <Text ta="right" fw={700}>Coach contract:</Text>
        <Text>{getCoachContractDates(coach)}</Text>
      </SimpleGrid>
    </Stack>
  );
};

export default TeamCardCoachingSection;
