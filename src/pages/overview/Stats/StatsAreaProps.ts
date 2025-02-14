import { StatisticsCompetition, Season, Scorer } from "@types";

export type StatsAreaProps = {
  competition: StatisticsCompetition;
  season: Season;
  scorers: Scorer[] | undefined;
};
