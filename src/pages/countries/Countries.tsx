import React, { useMemo } from "react";
import { Subscriber } from "@components";
import { ComboboxItemFactory } from "@services";
import { areas } from "@constants";
import { Grid } from "@mantine/core";

const Countries: React.FC = () => {
  const data = useMemo(() => ComboboxItemFactory.create(areas), [areas]);

  return (
    <Grid grow gutter="xs">
      <Grid.Col span={6}>
        <Subscriber id={1} areas={data} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Subscriber id={2} areas={data} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Subscriber id={3} areas={data} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Subscriber id={4} areas={data} />
      </Grid.Col>
    </Grid>
  );
};

export default Countries;
