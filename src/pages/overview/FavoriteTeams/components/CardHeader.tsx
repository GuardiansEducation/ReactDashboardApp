import { Title, Stack, Image, Anchor, Flex } from "@mantine/core";
import { TeamListItem } from "@types";
import { IconExternalLink } from "@tabler/icons-react";

export type CardHeaderProps = {
  team: TeamListItem;
};

const CardHeader: React.FC<CardHeaderProps> = ({ team }) => {
  return (
    <Flex justify="space-evenly" wrap="wrap">
      <Flex wrap="wrap" m="sm" align="center" justify="center" gap="sm">
        <Image src={team.crest} alt="Team logo" h={120} radius="md" />
        <Stack gap="xs" align="center" justify="center">
          <Title size="h1" ta="center">
            {team.shortName} ({team.tla})
          </Title>
          <Anchor href={team.website} target="_blank">
            Official site&nbsp;<IconExternalLink size={15} />
          </Anchor>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CardHeader;
