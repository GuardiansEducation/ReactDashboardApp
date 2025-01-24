import { CompetitionArea } from "../CompetitionArea";
import { CompetitionStandingItem } from "../CompetitionStandings/CompetitionStandingItem";
import { Team } from "../CompetitionStandings/Team";
import { Season } from "../Season";
import { Odds } from "./Odds";
import { Score } from "./Score";

export interface Match {
  area: CompetitionArea;
  competition: CompetitionStandingItem;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  odds: Odds;
  referees: [];
}
