import { Group, BackgroundImage, Image, Stack, Flex, Space, Badge } from "@mantine/core";

export type StatsAreaHeaderProps = {
  title: string;
  emblem: string | undefined;
  backgroundImage: string;
};

const StatsAreaHeader: React.FC<StatsAreaHeaderProps> = ({ title, emblem, backgroundImage }) => {
  return (
    <BackgroundImage h={200} src={backgroundImage} radius="md">
      <Flex mih={200} justify="flex-end" align="flex-start" direction="row">
        <Stack>
          <Space />
          <Group>
            <Badge color="orange" variant="gradient" size="xl" radius="md">
              <Group>
                <Image h={30} src={emblem}></Image>
                {title}
              </Group>
            </Badge>
            <Space />
          </Group>
        </Stack>
      </Flex>
    </BackgroundImage>
  );
};

export default StatsAreaHeader;
