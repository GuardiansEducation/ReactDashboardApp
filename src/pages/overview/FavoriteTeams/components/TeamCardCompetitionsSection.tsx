import { Title, Stack, Image, Center, Flex, Tooltip } from "@mantine/core";
import { TeamCompetition } from "@types";

export type TeamCardCompetitionsSectionProps = {
  competitions: TeamCompetition[];
};

const TeamCardCompetitionsSection: React.FC<TeamCardCompetitionsSectionProps> = ({ competitions }) => {
  return (
    <Stack m="sm">
      <Center>
        <Title size="h5">Running competitions</Title>
      </Center>
      <Flex wrap="wrap" justify="center" align="center" gap="xl">
        {competitions.map((competition, index) => (
          <Tooltip key={index}  label={competition.name}>
            <Image src={competition.emblem} alt={competition.name} h={100} radius="md" bg="white" p="md" />
          </Tooltip>
        ))}
      </Flex>
    </Stack>
  );
};

export default TeamCardCompetitionsSection;
