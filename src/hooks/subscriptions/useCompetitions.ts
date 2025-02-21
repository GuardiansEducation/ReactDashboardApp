import { useEffect, useState } from "react";
import { CompetitionList, SubscribedArea, SubscribedCompetition } from "@types";
import { CompetitionService, SubscribedCompetitionFactory } from "@services";

export interface CompetitionsActions {
  loading: boolean;
  competitions: SubscribedCompetition[];
}

export const useCompetitions = (subscribedArea?: SubscribedArea): CompetitionsActions => {
  const [loading, setLoading] = useState<boolean>(false);
  const [competitions, setCompetitions] = useState<SubscribedCompetition[]>([]);

  useEffect(() => {
    if (subscribedArea == null) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const list: CompetitionList = await CompetitionService.listAreaCompetitions(
          subscribedArea.id
        );
        const competitions: SubscribedCompetition[] = list.competitions.map((x) =>
          SubscribedCompetitionFactory.create(x)
        );
        setCompetitions(competitions);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subscribedArea]);

  return {
    loading,
    competitions,
  };
};
