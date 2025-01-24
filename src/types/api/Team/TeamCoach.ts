import { CoachContract } from "./CoachContract";

export interface TeamCoach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: CoachContract;
}
