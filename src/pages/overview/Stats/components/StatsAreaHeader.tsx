import { Group, BackgroundImage, Stack, Flex, Space, Badge } from "@mantine/core";

export type StatsAreaHeaderProps = {
  title: string;
  backgroundImage: string;
};

const StatsAreaHeader: React.FC<StatsAreaHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <BackgroundImage h={200} src={backgroundImage}>
      <Flex mih={200} justify="flex-end" align="flex-start" direction="row">
        <Stack>
          <Space />
          <Group>
            <Badge color="orange" variant="gradient" size="xl" radius="md">
              {title}
            </Badge>
            <Space />
          </Group>
        </Stack>
      </Flex>
    </BackgroundImage>
  );
};

export default StatsAreaHeader;
