import React, { useState } from "react";
import { incremented } from "@store";
import { Button, Grid, Image } from "@mantine/core";
import { CompetitionService } from "@services";
import { useAppDispatch, useAppSelector } from "@hooks";
import { CompetitionArea } from "@types";

const Countries: React.FC = () => {
  const number = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<CompetitionArea>({
    id: 0,
    name: "name",
    flag: "flag",
    code: "code",
  });

  return (
    <>
      <div>Number: {number}</div>
      <Button
        onClick={() => {
          dispatch(incremented());
        }}
      >
        increment
      </Button>
      <div>
        <Button
          onClick={async () => {
            const response = await CompetitionService.get(2021);//PL Id
            console.log(response);
            setData(response.area);
          }}
        >
          Push me
        </Button>

        <Grid>
          <Grid.Col span={4}>{data.name}</Grid.Col>
          <Grid.Col span={4}>{data.code}</Grid.Col>
          <Grid.Col span={4}>
            <Image src={data.flag} alt="flag" radius="md" />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default Countries;
