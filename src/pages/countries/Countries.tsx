import React, { useMemo } from "react";
import { Grid, Paper } from "@mantine/core";
import { ComboboxItemFactory } from "@services";
import { Subscriber } from "@components";
import { areas } from "@constants";

const Countries: React.FC = () => {
  const data = useMemo(() => ComboboxItemFactory.create(areas), [areas]);
  const items = [
    {
      id: 1,
      area: areas[0],
    },
    {
      id: 2,
      area: areas[1],
    },
    {
      id: 3,
      area: areas[2],
    },
    {
      id: 4,
      area: areas[3],
    },
  ];

  return (
    <Grid grow gutter="xs">
      {items.map((x) => (
        <Grid.Col key={x.id} span={6}>
          <Paper p="xl" shadow="sm" mih={370} withBorder>
            <Subscriber id={x.id} defaultArea={x.area} areas={data} />
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Countries;
