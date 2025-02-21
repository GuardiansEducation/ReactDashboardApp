import { Group, Title, Stack, Image, Text, Grid } from "@mantine/core";
import { Scorer } from "@types";
import { CountryFlag } from "@components";

export type PlayerProps = {
  scorer: Scorer;
  position: number;
  value: number | null;
};

const Player: React.FC<PlayerProps> = ({ scorer, position, value }) => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={2} ta="center" my="auto">
        <Title size="h2">{position}</Title>
      </Grid.Col>
      <Grid.Col span={2} my="auto">
        <Stack align="center" justify="center">
          <Image w={40} h={40} src={scorer.team.crest} />
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack align="stretch" justify="center" gap={0}>
          <Group gap="xs" wrap="nowrap">
            <Text size="h5" fw="bold" c="tomato" truncate="end">
              {scorer.player.name}
            </Text>
            <CountryFlag countryFullName={scorer.player.nationality} />
          </Group>
          <Text>{scorer.team.shortName}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2} ta="center" my="auto">
        <Title size="h2">{value}</Title>
      </Grid.Col>
    </Grid>
  );
};

export default Player;
