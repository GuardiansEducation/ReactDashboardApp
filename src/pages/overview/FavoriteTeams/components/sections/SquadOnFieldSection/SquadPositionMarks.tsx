import { TeamMember, TeamMemberPosition } from "@types";
import TooltipContent from "./TooltipContent";
import SvgPositionCircleMark from "./SvgPositionCircleMark";
import SvgPositionRectangleMark from "./SvgPositionRectangleMark";

export type SquadPositionMarksProps = {
  squad: TeamMember[];
};

enum MarkShape {
  Circle = "circle",
  Rectangle = "rectangle",
}

type TooltipProperties = {
  shape: MarkShape;
  x: number;
  y: number;
  radius?: number;
  height?: number;
  width?: number;
};

type TooltipMapping = Record<TeamMemberPosition, TooltipProperties>;

const tooltipMapping: TooltipMapping = {
  [TeamMemberPosition.Defence]: { shape: MarkShape.Rectangle, x: -2, y: 73, width: 4, height: 28 },
  [TeamMemberPosition.Midfield]: { shape: MarkShape.Rectangle, x: -2, y: 38.5, width: 4, height: 28 },
  [TeamMemberPosition.Offence]: { shape: MarkShape.Rectangle, x: -2, y: 4, width: 4, height: 28 },
  [TeamMemberPosition.Goalkeeper]: { shape: MarkShape.Circle, x: 32, y: 100.3, radius: 2 },
  [TeamMemberPosition.LeftBack]: { shape: MarkShape.Circle, x: 10, y: 77, radius: 2 },
  [TeamMemberPosition.CentreBack]: { shape: MarkShape.Rectangle, x: 20, y: 77, width: 28, height: 4 },
  [TeamMemberPosition.RightBack]: { shape: MarkShape.Circle, x: 54, y: 77, radius: 2 },
  [TeamMemberPosition.DefensiveMidfield]: { shape: MarkShape.Rectangle, x: 20, y: 62.5, width: 28, height: 4 },
  [TeamMemberPosition.CentralMidfield]: { shape: MarkShape.Rectangle, x: 20, y: 50.5, width: 28, height: 4 },
  [TeamMemberPosition.AttackingMidfield]: { shape: MarkShape.Rectangle, x: 20, y: 38.5, width: 28, height: 4 },
  [TeamMemberPosition.LeftWinger]: { shape: MarkShape.Circle, x: 10, y: 24, radius: 2 },
  [TeamMemberPosition.CentreForward]: { shape: MarkShape.Rectangle, x: 20, y: 24, width: 28, height: 4 },
  [TeamMemberPosition.RightWinger]: { shape: MarkShape.Circle, x: 54, y: 24, radius: 2 },
};

const SquadPositionMarks: React.FC<SquadPositionMarksProps> = ({ squad }) => {
  const squadOnField = squad.reduce((acc, member) => {
    const { position } = member;

    if (!acc[position]) {
      acc[position] = [];
    }

    acc[position].push(member);

    return acc;
  }, {} as { [key: string]: TeamMember[] });

  const renderTooltip = (
    position: TeamMemberPosition,
    { shape, x, y, radius, width, height }: TooltipProperties
  ) => {
    const memberOnPosition = squadOnField[position] || [];

    if (shape === MarkShape.Circle && radius !== undefined) {
      return (
        <SvgPositionCircleMark key={position} x={x} y={y} radius={radius} fill="red">
          <TooltipContent position={position} members={memberOnPosition} />
        </SvgPositionCircleMark>
      );
    }

    if (shape === MarkShape.Rectangle && width !== undefined && height !== undefined) {
      return (
        <SvgPositionRectangleMark key={position} x={x} y={y} width={width} height={height} radius={1} fill="red">
          <TooltipContent position={position} members={memberOnPosition} />
        </SvgPositionRectangleMark>
      );
    };

    return null;
  };

  const result = Object
    .entries(tooltipMapping)
    .map(([position, props]) => renderTooltip(position as TeamMemberPosition, props));

  return result;
};

export default SquadPositionMarks;
