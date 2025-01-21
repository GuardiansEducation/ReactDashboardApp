import React from "react";
import { Button } from "@mantine/core";
import { decremented } from "@store";
import { useAppDispatch, useAppSelector } from "@hooks";

const Overview: React.FC = () => {
  const number = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();

  const selectedCompetitions = [
    {
      competition: {
        area: {
          id: 2072,
          name: "England",
          code: "ENG",
          flag: "https://crests.football-data.org/770.svg"
        },
        name: "Premier League",
        code: "PL",
      },
      followedTeamIds: [],  // Maximum 3
    },

    // ... Maximum 4
  ]

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
