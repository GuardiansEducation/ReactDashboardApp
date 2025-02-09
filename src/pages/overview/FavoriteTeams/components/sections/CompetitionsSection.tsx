import { Image, Flex, Tooltip } from "@mantine/core";
import { TeamCompetition } from "@types";

export type CompetitionsSectionProps = {
  competitions: TeamCompetition[];
};

const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ competitions }) => {
  return (
    <Flex wrap="wrap" gap="xl">
      {competitions.map((competition, index) => (
        <Tooltip key={index} label={competition.name}>
          <Image src={competition.emblem} alt={competition.name} h={100} radius="md" bg="white" p="md" />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default CompetitionsSection;
