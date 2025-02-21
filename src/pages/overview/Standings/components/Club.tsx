import { Group, Image, Stack, Title } from "@mantine/core";
import { StandingsInfoTeam } from "../../../../types/api/Standings";

export type ClubProps = {
  team: StandingsInfoTeam;
};

const Club: React.FC<ClubProps> = ({ team }) => {
  return (
    <Stack align="stretch" justify="center" gap="xs">
      <Group>
        <Image w={40} h={40} src={team.crest} />
        <Title size="h5">{team.shortName}</Title>
      </Group>
    </Stack>
  );
};

export default Club;
