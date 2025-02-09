import { IconExternalLink } from "@tabler/icons-react";
import { Title, Text, Stack, Group, Image, Anchor, Flex } from "@mantine/core";
import { TeamListItem } from "@types";

export type CardHeaderProps = {
  team: TeamListItem;
};

const CardHeader: React.FC<CardHeaderProps> = ({ team }) => {
  return (
    <Flex justify="space-evenly" wrap="wrap">
      <Group wrap="nowrap" m="sm">
        <Image src={team.crest} alt="Team logo" h={120} radius="md" />
        <Stack gap="xs" align="center" justify="center">
          <Title size="h1">
            {team.shortName}
          </Title>
          <Text>Founded in {team.founded}</Text>
          <Anchor href={team.website} target="_blank">
            Official site&nbsp;<IconExternalLink size={15} />
          </Anchor>
        </Stack>
      </Group>
    </Flex>
  );
};

export default CardHeader;
