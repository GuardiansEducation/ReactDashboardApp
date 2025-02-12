import { Flex } from "@mantine/core";
import { TeamMember } from "@types";
import SquadPositionMarks from "./SquadPositionMarks";

export type SquadOnFieldSectionProps = {
  squad: TeamMember[];
};

const SquadOnFieldSection: React.FC<SquadOnFieldSectionProps> = ({ squad }) => {
  return (
    <Flex justify="center" align="center" pt="sm">
      <svg xmlns="http://www.w3.org/2000/svg" height="500" viewBox="0 0 74 111">
        <rect id="" width="74" height="111" fill="#00a000" />
        <g fill="none" stroke="#fff" strokeWidth="0.5" transform="translate(3 3)">
          <path id="Border" d="M 0 0 h 68 v 105 h -68 Z" />
          <path id="Centre line" d="M 0 52.5 h 68" />
          <circle id="Centre circle" r="9.15" cx="34" cy="52.5" />
          <circle id="Centre mark" r="0.75" cx="34" cy="52.5" fill="#fff" stroke="none" />
          <g id="Penalty area 1">
            <path id="Penalty area line 1" d="M 13.84 0 v 16.5 h 40.32 v -16.5" />
            <path id="Goal area line 1" d="M 24.84 0 v 5.5 h 18.32 v -5.5" />
            <circle id="Penalty mark 1" r="0.75" cx="34" cy="10.94" fill="#fff" stroke="none" />
            <path id="Penalty arc 1" d="M 26.733027 16.5 a 9.15 9.15 0 0 0 14.533946 0" />
          </g>
          <g id="Penalty area 2">
            <path id="Penalty area line 2" d="M 13.84 105 v -16.5 h 40.32 v 16.5" />
            <path id="Goal area line 2" d="M 24.84 105 v -5.5 h 18.32 v 5.5" />
            <circle id="Penalty mark 2" r="0.75" cx="34" cy="94.06" fill="#fff" stroke="none" />
            <path id="Penalty arc 2" d="M 26.733027 88.5 a 9.15 9.15 0 0 1 14.533946 0" />
          </g>
          <path
            id="Corner arcs"
            d="M 0 2 a 2 2 0 0 0 2 -2M 66 0 a 2 2 0 0 0 2 2M 68 103 a 2 2 0 0 0 -2 2M 2 105 a 2 2 0 0 0 -2 -2"
          />

          <path id="Offence third" d="M 0 35 h 68" strokeDasharray="2 1" />
          <path id="Defence third" d="M 0 70 h 68" strokeDasharray="2 1" />

          <SquadPositionMarks squad={squad} />
        </g>
      </svg>
    </Flex>
  );
};

export default SquadOnFieldSection;
