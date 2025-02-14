import { TeamArea } from "./TeamArea";
import { TeamCoach } from "./TeamCoach";
import { TeamCompetition } from "./TeamCompetition";
import { TeamMember } from "./TeamMember";

export interface TeamListItem {
  area: TeamArea;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  coach: TeamCoach;
  squad: TeamMember[];
  lastUpdated: string;
  runningCompetitions: TeamCompetition[];
}
