import { Scorer } from "@types";
import { Group, Title, Stack, Image, Text, Grid, Center } from "@mantine/core";
import { CountryFlag } from "@components";

export type PlayerProps = {
  scorer: Scorer;
  position: number;
  value: number | null;
};

const Player: React.FC<PlayerProps> = ({ scorer, position, value }) => {
  return (
    <Grid>
      <Grid.Col span={2}>
        <Center>
          <Title size="h2">{position}</Title>
        </Center>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack align="stretch" justify="center" gap="xs">
          <Image w={40} h={40} src={scorer.team.crest} />
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack align="stretch" justify="center" gap="xs">
          <Group>
            <Title size="h5">{scorer.player.name}</Title>
            <CountryFlag countryFullName={scorer.player.nationality} />
          </Group>
          <Text>{scorer.team.name}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Center>
          <Title size="h2">{value}</Title>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default Player;
