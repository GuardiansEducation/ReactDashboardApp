import React, { useMemo } from "react";
import { Grid, Paper } from "@mantine/core";
import { ComboboxItemFactory } from "@services";
import { Subscriber } from "@components";
import { areas } from "@constants";

const Subscriptions: React.FC = () => {
  const data = useMemo(() => ComboboxItemFactory.create(areas), [areas]);
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
    <Grid grow gutter="xs">
      {items.map((x) => (
        <Grid.Col key={x.id} span={6}>
          <Paper p="xl" shadow="sm" h="100%" withBorder>
            <Subscriber id={x.id} areas={data} />
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Subscriptions;
