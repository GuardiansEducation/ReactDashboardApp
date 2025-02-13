import { useEffect, useState } from "react";
import { CompetitionStandings } from "../../types/api/Standings";

export const useSeasonDates = (standings: CompetitionStandings | undefined) => {
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();

  useEffect(() => {
    if (standings) {
      setStartDate(standings.season.startDate.split("-")[0]);
      setEndDate(standings.season.endDate.split("-")[0]);
    }
  }, [standings]);

  return { startDate, endDate };
};
