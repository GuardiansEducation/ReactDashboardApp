import React, { useMemo } from "react";
import { Grid, Paper } from "@mantine/core";
import { ComboboxItemFactory } from "@services";
import { Subscriber } from "@components";
import { areas } from "@constants";

const Countries: React.FC = () => {
  const data = useMemo(() => ComboboxItemFactory.create(areas), [areas]);

  return (
    <Grid grow gutter="xs">
      <Grid.Col span={6}>
        <Paper shadow="xl" radius="xl" p="xl">
          <Subscriber id={1} areas={data} />
        </Paper>
      </Grid.Col>
      <Grid.Col span={6}>
        <Paper shadow="xl" radius="xl" p="xl">
          <Subscriber id={2} areas={data} />
        </Paper>
      </Grid.Col>
      <Grid.Col span={6}>
        <Paper shadow="xl" radius="xl" p="xl">
          <Subscriber id={3} areas={data} />
        </Paper>
      </Grid.Col>
      <Grid.Col span={6}>
        <Paper shadow="xl" radius="xl" p="xl">
          <Subscriber id={4} areas={data} />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default Countries;
