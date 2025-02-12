import { TeamMemberPosition } from "./TeamMemberPosition";

export interface TeamMember {
  id: number;
  name: string;
  position: TeamMemberPosition;
  dateOfBirth?: string;
  nationality: string;
}
