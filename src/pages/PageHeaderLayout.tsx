import { Paper, Grid, Title, Flex } from "@mantine/core";

export type PageLayoutProps = {
  image: React.ReactNode;
  content: string;
};

const PageHeaderLayout: React.FC<PageLayoutProps> = ({ image, content }) => {
  return (
    <>
      <Paper>
        <Grid gutter="xs">
          <Grid.Col span={1}>
            <Flex mih={100} align="center" justify="center">
              {image}
            </Flex>
          </Grid.Col>
          <Grid.Col span={11}>
            <Flex mih={100} align="center">
              <Title h="h1">{content}</Title>
            </Flex>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
};

export default PageHeaderLayout;
