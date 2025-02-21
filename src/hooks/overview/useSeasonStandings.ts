import { useEffect, useState } from "react";
import { StandingsService } from "@services";
import { Standing } from "@types";

export type SelectedSeason = {
  standing: Standing | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
}

export const useSeasonStandings = (selectedCompetitionCode: string | undefined) => {
  const [selectedSeason, setSelectedSeason] = useState<SelectedSeason>();

  const fetchStandings = async (code: string) => {
    const currentSeason = (new Date().getFullYear() - 1).toString();
    const response = await StandingsService.getBySeason(code, currentSeason);

    setSelectedSeason({
      standing: response.standings[0],
      startDate: response.season.startDate.split("-")[0],
      endDate: response.season.endDate.split("-")[0],
    });
  };

  const updateStandingsBySeason = async (season: string | undefined) => {
    if (!season || !selectedCompetitionCode) return;

    const response = await StandingsService.getBySeason(selectedCompetitionCode, season);

    setSelectedSeason({
      standing: response.standings[0],
      startDate: response.season.startDate.split("-")[0],
      endDate: response.season.endDate.split("-")[0],
    });
  };

  useEffect(() => {
    if (selectedCompetitionCode) {
      fetchStandings(selectedCompetitionCode);
    }
  }, [selectedCompetitionCode]);

  return { selectedSeason, updateStandingsBySeason };
};
