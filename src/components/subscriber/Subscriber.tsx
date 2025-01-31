import React from "react";
import { ComboboxItem } from "@mantine/core";
import { useSubscribedArea, useSubscribedCompetition } from "@hooks";
import { AreaSelector } from "../shared";
import { Teams } from "../teams/Teams";
import CompetitionTable from "./CompetitionTable";

export interface SubscriberProps {
  id: number;
  areas: ComboboxItem[];
}

const Subscriber: React.FC<SubscriberProps> = ({ id, areas }) => {
  const { subscribedArea, setSubscribedArea } = useSubscribedArea(id);
  const { competitions, subscribedCompetition, subscribe } = useSubscribedCompetition(id, subscribedArea);

  return (
    <>
      <div>
        <AreaSelector
          areas={areas}
          defaultValue={subscribedArea?.id.toString()}
          onAreaChanged={setSubscribedArea}
        ></AreaSelector>
      </div>
      <div>
        {competitions.length > 0 && (
          <CompetitionTable
            competitions={competitions}
            subscribedCompetition={subscribedCompetition}
            onSubscribe={subscribe}
          />
        )}
        {subscribedCompetition && <Teams competitionId={subscribedCompetition.id} />}
      </div>
    </>
  );
};

export default Subscriber;
