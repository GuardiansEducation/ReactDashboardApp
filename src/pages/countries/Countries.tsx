import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { incremented } from "../../store/slices/counterSlice";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Countries: React.FC = () => {
  const number = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>Ben</div>
      <div>{number}</div>
      <Button
        onClick={() => {
          dispatch(incremented());
        }}
      >increment</Button>
      <Button
        onClick={() => {
          navigate("/overview");
        }}
      >
        navigate
      </Button>
    </>
  );
};

export default Countries;
