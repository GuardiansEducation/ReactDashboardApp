import { TeamMember, TeamMemberPosition } from "@types";
import SquadPositionMark, { MarkShape, TooltipProperties } from "./SquadPositionMark";
import * as MARK from "./constants/markConstants";

export type SquadPositionsProps = {
  squad: TeamMember[];
};

type TooltipMapping = Record<TeamMemberPosition, TooltipProperties>;

const goalkeeperMark = {
  [TeamMemberPosition.Goalkeeper]: {
    shape: MarkShape.Circle,
    x: MARK.GOALKEEPER.X,
    y: MARK.GOALKEEPER.Y,
    radius: MARK.DIMENSIONS.CIRCLE.RADIUS
  },
}

const backLineMarks = {
  [TeamMemberPosition.LeftBack]: {
    shape: MarkShape.Circle,
    x: MARK.SIDE_DOTS.LEFT_X,
    y: MARK.THIRDS_CENTER_LINES.BACK_Y,
    radius: MARK.DIMENSIONS.CIRCLE.RADIUS
  },
  [TeamMemberPosition.CentreBack]: {
    shape: MarkShape.Rectangle,
    x: MARK.THIRDS_CENTER_LINES.X,
    y: MARK.THIRDS_CENTER_LINES.BACK_Y,
    width: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.SHORT.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.SHORT.HEIGHT
  },
  [TeamMemberPosition.RightBack]: {
    shape: MarkShape.Circle,
    x: MARK.SIDE_DOTS.RIGHT_X,
    y: MARK.THIRDS_CENTER_LINES.BACK_Y,
    radius: MARK.DIMENSIONS.CIRCLE.RADIUS
  },
}

const midfieldLineMarks = {
  [TeamMemberPosition.DefensiveMidfield]: {
    shape: MarkShape.Rectangle,
    x: MARK.CENTER_LINES.X,
    y: MARK.CENTER_LINES.DEFENCE_Y,
    width: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.LONG.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.LONG.HEIGHT
  },
  [TeamMemberPosition.CentralMidfield]: {
    shape: MarkShape.Rectangle,
    x: MARK.CENTER_LINES.X,
    y: MARK.CENTER_LINES.MIDFIELD_Y,
    width: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.LONG.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.LONG.HEIGHT
  },
  [TeamMemberPosition.AttackingMidfield]: {
    shape: MarkShape.Rectangle,
    x: MARK.CENTER_LINES.X,
    y: MARK.CENTER_LINES.ATTACK_Y,
    width: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.LONG.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.LONG.HEIGHT
  },
}

const forwardLineMarks = {
  [TeamMemberPosition.LeftWinger]: {
    shape: MarkShape.Circle,
    x: MARK.SIDE_DOTS.LEFT_X,
    y: MARK.THIRDS_CENTER_LINES.FORWARD_Y,
    radius: MARK.DIMENSIONS.CIRCLE.RADIUS
  },
  [TeamMemberPosition.CentreForward]: {
    shape: MarkShape.Rectangle,
    x: MARK.THIRDS_CENTER_LINES.X,
    y: MARK.THIRDS_CENTER_LINES.FORWARD_Y,
    width: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.SHORT.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.HORIZONTAL.SHORT.HEIGHT
  },
  [TeamMemberPosition.RightWinger]: {
    shape: MarkShape.Circle,
    x: MARK.SIDE_DOTS.RIGHT_X,
    y: MARK.THIRDS_CENTER_LINES.FORWARD_Y,
    radius: MARK.DIMENSIONS.CIRCLE.RADIUS
  },
}

const verticalLeftLineMarks = {
  [TeamMemberPosition.Defence]: {
    shape: MarkShape.Rectangle,
    x: MARK.LEFT_VERTICAL_MARKERS.X,
    y: MARK.LEFT_VERTICAL_MARKERS.DEFENCE_Y,
    width: MARK.DIMENSIONS.RECTANGLE.VERTICAL.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.VERTICAL.HEIGHT
  },
  [TeamMemberPosition.Midfield]: {
    shape: MarkShape.Rectangle,
    x: MARK.LEFT_VERTICAL_MARKERS.X,
    y: MARK.LEFT_VERTICAL_MARKERS.MIDFIELD_Y,
    width: MARK.DIMENSIONS.RECTANGLE.VERTICAL.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.VERTICAL.HEIGHT
  },
  [TeamMemberPosition.Offence]: {
    shape: MarkShape.Rectangle,
    x: MARK.LEFT_VERTICAL_MARKERS.X,
    y: MARK.LEFT_VERTICAL_MARKERS.OFFENCE_Y,
    width: MARK.DIMENSIONS.RECTANGLE.VERTICAL.WIDTH,
    height: MARK.DIMENSIONS.RECTANGLE.VERTICAL.HEIGHT
  },
}

const tooltipMapping: TooltipMapping = {
  ...goalkeeperMark,
  ...backLineMarks,
  ...midfieldLineMarks,
  ...forwardLineMarks,
  ...verticalLeftLineMarks,
};

const SquadPositions: React.FC<SquadPositionsProps> = ({ squad }) => {
  const squadOnField = squad.reduce((acc, member) => {
    const { position } = member;

    if (!acc[position]) {
      acc[position] = [];
    }

    acc[position].push(member);

    return acc;
  }, {} as { [key: string]: TeamMember[] });

  const result = Object
    .entries(tooltipMapping)
    .map(([position, properties]) => (
      <SquadPositionMark
        key={position}
        position={position as TeamMemberPosition}
        properties={properties}
        members={squadOnField[position]}
      />
    ));

  return result;
};

export default SquadPositions;
