import { Flex } from "@mantine/core";
import { TeamCoach, TeamMember } from "@types";
import SquadPositions from "./SquadPositions";
import * as FC from "./constants/fieldConstants";
import CoachingSection from "../CoachingSection";

export type SquadOnFieldSectionProps = {
  squad: TeamMember[];
  coach: TeamCoach;
  useDashedThirds?: boolean;
};

const HTML_SVG_HEIGHT = 500;

const SquadOnFieldSection: React.FC<SquadOnFieldSectionProps> = ({ squad, coach, useDashedThirds = false }) => {
  return (
    <>
      <CoachingSection coach={coach} />
      <Flex justify="center" align="center" pt="sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={HTML_SVG_HEIGHT}
          viewBox={`0 0 ${FC.FIELD.WIDTH} ${FC.FIELD.HEIGHT}`}
        >
          <rect id="Field" width={FC.FIELD.WIDTH} height={FC.FIELD.HEIGHT} fill={FC.FIELD.COLOR} />
          <g
            id="Markup"
            fill={FC.MARKUP.SETTINGS.FILL}
            stroke={FC.MARKUP.SETTINGS.COLOR}
            strokeWidth={FC.MARKUP.SETTINGS.LINE_WIDTH}
            transform={`translate(${FC.MARKUP_OFFSET} ${FC.MARKUP_OFFSET})`}
          >
            <path
              id="Border"
              d={`
                M 0 0 h ${FC.MARKUP.DIMENSIONS.WIDTH}
                v ${FC.MARKUP.DIMENSIONS.HEIGHT}
                h -${FC.MARKUP.DIMENSIONS.WIDTH} Z
              `}
            />
            <path
              id="Centre line"
              d={`
                M ${FC.LINES.CENTER.X} ${FC.LINES.CENTER.Y}
                h ${FC.MARKUP.DIMENSIONS.WIDTH}
              `}
            />
            <circle
              id="Centre circle"
              r={FC.MARKUP.SETTINGS.CENTRAL_CIRCLE_RADIUS}
              cx={FC.MARKUP.DIMENSIONS.HALF_WIDTH}
              cy={FC.MARKUP.DIMENSIONS.HALF_HEIGHT}
            />
            <circle
              id="Centre mark"
              r={FC.MARKUP.SETTINGS.DOT_RADIUS}
              cx={FC.MARKUP.DIMENSIONS.HALF_WIDTH}
              cy={FC.MARKUP.DIMENSIONS.HALF_HEIGHT}
              fill={FC.MARKUP.SETTINGS.COLOR}
              stroke={FC.MARKUP.SETTINGS.CIRCLE_LINE_WIDTH}
            />
            <g id="Penalty area">
              <path
                id="Penalty area line"
                d={`
                  M ${FC.PENALTY_AREA.X} ${FC.PENALTY_AREA.Y}
                  v ${FC.PENALTY_AREA.HEIGHT}
                  h ${FC.PENALTY_AREA.WIDTH}
                  v -${FC.PENALTY_AREA.HEIGHT}
                `}
              />
              <path
                id="Goal area line"
                d={`
                  M ${FC.GOAL_AREA.X} ${FC.GOAL_AREA.Y}
                  v ${FC.GOAL_AREA.HEIGHT}
                  h ${FC.GOAL_AREA.WIDTH}
                  v -${FC.GOAL_AREA.HEIGHT}
                `}
              />
              <circle
                id="Penalty mark"
                r={FC.MARKUP.SETTINGS.DOT_RADIUS}
                cx={FC.MARKUP.DIMENSIONS.HALF_WIDTH}
                cy={FC.PENALTY_AREA.MARK_Y}
                fill={FC.MARKUP.SETTINGS.COLOR}
                stroke={FC.MARKUP.SETTINGS.CIRCLE_LINE_WIDTH}
              />
              <path
                id="Penalty arc"
                d={`
                  M ${FC.PENALTY_AREA.ARC.START_X} ${FC.PENALTY_AREA.ARC.START_Y}
                  a ${FC.PENALTY_AREA.ARC.RADIUS} ${FC.PENALTY_AREA.ARC.RADIUS} 0 0 0 ${FC.PENALTY_AREA.ARC.END_X} ${FC.PENALTY_AREA.ARC.END_Y}
                `}
              />
            </g>
            <use
              xlinkHref="#Penalty area"
              transform={`rotate(180, ${FC.MARKUP.DIMENSIONS.HALF_WIDTH}, ${FC.MARKUP.DIMENSIONS.HALF_HEIGHT})`}
            />
            <path
              id="Corner arcs"
              d={`
                M 0 2
                a 2 2 0 0 0 2 -2
                M 66 0
                a 2 2 0 0 0 2 2
                M ${FC.MARKUP.DIMENSIONS.WIDTH} 103
                a 2 2 0 0 0 -2 2
                M 2 ${FC.MARKUP.DIMENSIONS.HEIGHT}
                a 2 2 0 0 0 -2 -2
              `}
            />
            {useDashedThirds && (
              <>
                <path
                  id="Offence third"
                  d={`
                    M ${FC.LINES.CENTER.X} ${FC.LINES.OFFENCE.Y}
                    h ${FC.MARKUP.DIMENSIONS.WIDTH}
                  `}
                  strokeDasharray={`${FC.LINES.DASH_LENGTH} ${FC.LINES.DASH_GAP}`}
                />
                <path
                  id="Defence third"
                  d={`
                    M ${FC.LINES.DEFENCE.X} ${FC.LINES.DEFENCE.Y}
                    h ${FC.MARKUP.DIMENSIONS.WIDTH}
                  `}
                  strokeDasharray={`${FC.LINES.DASH_LENGTH} ${FC.LINES.DASH_GAP}`}
                />
              </>
            )}
            <SquadPositions squad={squad} />
          </g>
        </svg>
      </Flex>
    </>
  );
};

export default SquadOnFieldSection;
