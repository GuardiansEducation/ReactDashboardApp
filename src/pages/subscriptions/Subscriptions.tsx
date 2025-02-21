import { Grid, Paper, Space } from "@mantine/core";
import { IconBrandStripe } from "@tabler/icons-react";
import { ComboboxItemFactory } from "@services";
import { areas } from "@constants";
import Subscriber from "./components/Subscriber";
import PageHeaderLayout from "../PageHeaderLayout";

const Subscriptions: React.FC = () => {
  const data = ComboboxItemFactory.create(areas);
  const headerIcon = <IconBrandStripe height={70} width={70} />;
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <>
      <PageHeaderLayout image={headerIcon} content="Subscriptions" />
      <Space h="md" />
      <Grid grow gutter="md">
        {items.map((x) => (
          <Grid.Col key={x.id} span={{ base: 12, lg: 6 }}>
            <Paper p="xl" shadow="sm" h="100%" withBorder>
              <Subscriber id={x.id} areas={data} />
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Subscriptions;
