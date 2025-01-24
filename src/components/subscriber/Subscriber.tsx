import React, { useState, useCallback } from "react";
import { ComboboxItem } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "@hooks";
import { CompetitionService, SubscribedCompetitionFactory, SubscribedAreaFactory } from "@services";
import { subscribeCompetition } from "@store";
import {
  CompetitionList,
  CompetitionListItem,
  SubscribedCompetition,
  SubscribedArea,
  Team,
} from "@types";
import { AreaSelector } from "../shared";
import CompetitionTable from "./CompetitionTable";
import { Teams } from "../teams/Teams";

export interface SubscriberProps {
  id: number;
  areas: ComboboxItem[];
}

const Subscriber: React.FC<SubscriberProps> = ({ id, areas }) => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === id)
  );

  const [area, setArea] = useState<SubscribedArea | null>(null);
  const [competitionList, setCompetitionList] = useState<CompetitionList | null>(null);

  const handleAreaChanged = useCallback(async (id: number, name: string) => {
    const subscribedArea: SubscribedArea = SubscribedAreaFactory.createFromName(id, name);
    setArea(subscribedArea);
    const competitionList: CompetitionList = await CompetitionService.listAreaCompetitions(id);
    setCompetitionList(competitionList);
  }, []);

  const handleSubscribe = useCallback(
    (item: CompetitionListItem) => {
      if (area === null) {
        return;
      }

      const competition: SubscribedCompetition = SubscribedCompetitionFactory.create(item);
      dispatch(subscribeCompetition({ id, area, competition }));
    },
    [area]
  );

  return (
    <>
      <div>
        <AreaSelector areas={areas} onAreaChanged={handleAreaChanged}></AreaSelector>
      </div>
      <div>
        {competitionList && (
          <CompetitionTable
            competitions={competitionList.competitions}
            subscribedCompetition={subscription?.competition}
            onSubscribe={handleSubscribe}
          />
        )}
        {subscription && <Teams competitionId={subscription.competition.id} />}
      </div>
    </>
  );
};

export default Subscriber;
