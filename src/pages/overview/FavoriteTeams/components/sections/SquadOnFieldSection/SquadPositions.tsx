import { TeamMember, TeamMemberPosition } from "@types";
import SvgPositionMark, { MarkProperties } from "./SvgPositionMark";
import * as MARK from "./constants/markConstants";

export type SquadPositionsProps = {
  squad: TeamMember[];
};

type PartialTeamMembersPosition = Exclude<
  TeamMemberPosition,
  TeamMemberPosition.Defence |
  TeamMemberPosition.Offence |
  TeamMemberPosition.Midfield
>;
type TooltipMapping = Record<PartialTeamMembersPosition, MarkProperties>;

const commonMarkProperties = {
  radius: MARK.MARK_RADIUS,
  fill: MARK.MARK_FILL_COLOR,
  textColor: MARK.MARK_TEXT_COLOR,
  textSize: MARK.MARK_TEXT_SIZE,
}

const goalkeeperMark = {
  [TeamMemberPosition.Goalkeeper]: {
    text: "GK",
    x: MARK.GOALKEEPER.X,
    y: MARK.GOALKEEPER.Y,
    ...commonMarkProperties,
  },
}

const backLineMarks = {
  [TeamMemberPosition.LeftBack]: {
    text: "LB",
    x: MARK.SIDE_DOTS.LEFT_X,
    y: MARK.SIDE_DOTS.BACK_Y,
    ...commonMarkProperties,
  },
  [TeamMemberPosition.CentreBack]: {
    text: "CB",
    x: MARK.THIRDS_CENTER_DOTS.X,
    y: MARK.THIRDS_CENTER_DOTS.BACK_Y,
    ...commonMarkProperties,
  },
  [TeamMemberPosition.RightBack]: {
    text: "RB",
    x: MARK.SIDE_DOTS.RIGHT_X,
    y: MARK.SIDE_DOTS.BACK_Y,
    ...commonMarkProperties,
  },
}

const midfieldLineMarks = {
  [TeamMemberPosition.DefensiveMidfield]: {
    text: "CDM",
    x: MARK.MIDFIELD_DOTS.X,
    y: MARK.MIDFIELD_DOTS.DEFENCE_Y,
    ...commonMarkProperties,
  },
  [TeamMemberPosition.CentralMidfield]: {
    text: "CM",
    x: MARK.MIDFIELD_DOTS.X,
    y: MARK.MIDFIELD_DOTS.MIDFIELD_Y,
    ...commonMarkProperties,
  },
  [TeamMemberPosition.AttackingMidfield]: {
    text: "CAM",
    x: MARK.MIDFIELD_DOTS.X,
    y: MARK.MIDFIELD_DOTS.ATTACK_Y,
    ...commonMarkProperties,
  },
}

const forwardLineMarks = {
  [TeamMemberPosition.LeftWinger]: {
    text: "LW",
    x: MARK.SIDE_DOTS.LEFT_X,
    y: MARK.SIDE_DOTS.FORWARD_Y,
    ...commonMarkProperties,
  },
  [TeamMemberPosition.CentreForward]: {
    text: "CF",
    x: MARK.THIRDS_CENTER_DOTS.X,
    y: MARK.THIRDS_CENTER_DOTS.FORWARD_Y,
    ...commonMarkProperties,
  },
  [TeamMemberPosition.RightWinger]: {
    text: "RW",
    x: MARK.SIDE_DOTS.RIGHT_X,
    y: MARK.SIDE_DOTS.FORWARD_Y,
    ...commonMarkProperties,
  },
}

const tooltipMapping: TooltipMapping = {
  ...goalkeeperMark,
  ...backLineMarks,
  ...midfieldLineMarks,
  ...forwardLineMarks,
};

const SquadPositions: React.FC<SquadPositionsProps> = ({ squad }) => {
  const squadOnField = squad.reduce((acc, member) => {
    let { position } = member;

    switch (position) {
      case TeamMemberPosition.Offence:
        position = TeamMemberPosition.AttackingMidfield;
        break;
      case TeamMemberPosition.Midfield:
        position = TeamMemberPosition.CentralMidfield;
        break;
      case TeamMemberPosition.Defence:
        position = TeamMemberPosition.DefensiveMidfield;
        break;
    }

    if (!acc[position]) {
      acc[position] = [];
    }

    acc[position].push(member);

    return acc;
  }, {} as { [key: string]: TeamMember[] });

  const result = Object
    .entries(tooltipMapping)
    .map(([position, properties]) => (
      <SvgPositionMark
        key={position}
        position={position as TeamMemberPosition}
        properties={properties}
        members={squadOnField[position]}
      />
    ));

  return result;
};

export default SquadPositions;
