import React, { useEffect } from "react";
import { ComboboxItem, Space } from "@mantine/core";
import { useSubscribedArea, useSubscribedCompetition } from "@hooks";
import { AreaSelector } from "../shared";
import { Teams } from "../teams/Teams";
import { Area } from "@types";
import CompetitionTable from "./CompetitionTable";

export interface SubscriberProps {
  id: number;
  areas: ComboboxItem[];
  defaultArea?: Area;
}

const Subscriber: React.FC<SubscriberProps> = ({ id, areas }) => {
  const { subscribedArea, setSubscribedArea } = useSubscribedArea(id);
  const { competitions, subscribedCompetition, subscribe, unsubscribe } = useSubscribedCompetition(
    id,
    subscribedArea
  );

  return (
    <>
      <AreaSelector
        areas={areas}
        selectedValue={subscribedArea?.id}
        onAreaChanged={setSubscribedArea}
      />
      <Space h="xs" />
      {competitions.length > 0 && (
        <CompetitionTable
          competitions={competitions}
          subscribedCompetition={subscribedCompetition}
          onSubscribe={subscribe}
          onUnsubscribe={unsubscribe}
        />
      )}
      <Space h="xs" />
      {subscribedCompetition && <Teams subscriptionId={id} />}
    </>
  );
};

export default Subscriber;
