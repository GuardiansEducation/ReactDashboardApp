import { useState, useEffect } from "react";
import { Scorer, Season } from "@types";
import { StatisticsService } from "@services";

export type TopScorersActions = {
  loading: boolean;
  startDate: string | undefined;
  endDate: string | undefined;
  topScorers: Scorer[] | undefined;
  updateScorers: (season: string | undefined) => void;
};

export const useTopScorers = (
  code: string,
  season: Season,
  scorers: Scorer[] | undefined
): TopScorersActions => {
  const [loading, setLoading] = useState<boolean>(false);
  const [topScorers, setTopScorers] = useState<Scorer[] | undefined>(scorers);
  const [startDate, updateStartDate] = useState<string | undefined>(
    season.startDate.substring(0, season.startDate.indexOf("-"))
  );
  const [endDate, updateEndDate] = useState<string | undefined>(
    season.endDate.substring(0, season.endDate.indexOf("-"))
  );

  const updateScorers = async (season: string | undefined) => {
    if (season === undefined) return;
    try {
      setLoading(true);
      const response = await StatisticsService.getBySeason(code, season);

      setTopScorers(response.scorers);
      updateStartDate(
        response.season.startDate.substring(0, response.season.startDate.indexOf("-"))
      );
      updateEndDate(response.season.endDate.substring(0, response.season.endDate.indexOf("-")));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTopScorers(scorers);
  }, [scorers]);

  return {
    loading,
    topScorers: topScorers,
    startDate: startDate,
    endDate: endDate,
    updateScorers,
  };
};
