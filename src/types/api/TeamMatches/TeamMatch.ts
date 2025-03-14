import { TeamMatchArea } from "./TeamMatchArea";
import { TeamMatchCompetition } from "./TeamMatchCompetition";
import { TeamMatchSeason } from "./TeamMatchSeason";
import { TeamMatchHomeTeam } from "./TeamMatchHomeTeam";
import { TeamMatchScore } from "./TeamMatchScore";
import { TeamMatchOdds } from "./TeamMatchOdds";
import { TeamMatchReferee } from "./TeamMatchReferee";
import { TeamMatchStatus } from "./TeamMatchStatus";

export interface TeamMatch {
  area: TeamMatchArea;
  competition: TeamMatchCompetition;
  season: TeamMatchSeason;
  id: number;
  utcDate: string;
  status: TeamMatchStatus;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  homeTeam: TeamMatchHomeTeam;
  awayTeam: TeamMatchHomeTeam;
  score: TeamMatchScore;
  odds: TeamMatchOdds;
  referees: TeamMatchReferee[];
}
