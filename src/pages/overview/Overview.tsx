import React from "react";
import { Button } from "@mantine/core";
import { decremented } from "@store";
import { useAppDispatch, useAppSelector } from "@hooks";

const Overview: React.FC = () => {
  const number = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>Number: {number}</div>
      <Button
        onClick={() => {
          dispatch(decremented());
        }}
      >
        decrement
      </Button>
    </>
  );
};

export default Overview;
