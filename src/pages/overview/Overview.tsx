import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decremented } from "../../store/slices/counterSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const Overview: React.FC = () => {
  const number = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>Pidduck</div>
      <div>{number}</div>
      <Button
        onClick={() => {
          dispatch(decremented());
        }}
      >decrement</Button>
      <Button
        onClick={() => {
          navigate("/countries");
        }}
      >
        navigate
      </Button>
    </>
  );
};

export default Overview;
