import { SubscribedCompetition } from "@types";
import { useEffect, useState } from "react";
import standingsService from "../../services/api/standingsService";
import { CompetitionStandings } from "../../types/api/Standings";

export const useStandings = (selectedOverview: SubscribedCompetition | undefined) => {
  const [standings, setStandings] = useState<CompetitionStandings>();

  const fetchStandings = async (code: string) => {
    const response = await standingsService.get(code);
    setStandings(response);
    console.log("call");
  };

  const updateStandingsBySeason = async (season: string | undefined) => {
    if (!season || !standings?.competition.code) return;

    const response = await standingsService.getBySeason(standings.competition.code, season);
    setStandings(response);
  };

  useEffect(() => {
    if (selectedOverview?.code) {
      fetchStandings(selectedOverview.code);
    }
  }, [selectedOverview?.code]);

  return { standings, updateStandingsBySeason };
};
