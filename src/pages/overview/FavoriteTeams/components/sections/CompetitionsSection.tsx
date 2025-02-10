import { Image, Flex, Tooltip, Text, Center, useMantineTheme } from "@mantine/core";
import { TeamCompetition } from "@types";

export type CompetitionsSectionProps = {
  competitions: TeamCompetition[];
};

const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ competitions }) => {
  const theme = useMantineTheme();

  const renderCompetition = (competition: TeamCompetition, index: number) => {
    const { name, emblem } = competition;

    return (
      <Tooltip key={index} label={name}>
        {emblem ?
          <Image src={emblem} alt={name} h={100} radius="md" bg="white" p="md" />
          :
          <Center h={100} w={100} bg="white" style={{ borderRadius: theme.radius.md }}>
            <Text ta="center" c="dark" fw="bold">
              {name}
            </Text>
          </Center>
        }
      </Tooltip>
    )
  };

  return (
    <Flex wrap="wrap" gap="xl" justify="center">
      {competitions.map((competition, index) => renderCompetition(competition, index))}
    </Flex>
  );
};

export default CompetitionsSection;
