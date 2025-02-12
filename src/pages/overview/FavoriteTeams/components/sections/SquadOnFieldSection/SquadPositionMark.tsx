import { TeamMember, TeamMemberPosition } from "@types";
import TooltipContent from "./TooltipContent";
import SvgPositionCircleMark from "./SvgComponents/SvgPositionCircleMark";
import SvgPositionRectangleMark from "./SvgComponents/SvgPositionRectangleMark";

export type SquadPositionMarkProps = {
  position: TeamMemberPosition;
  properties: TooltipProperties;
  members: TeamMember[];
};

export enum MarkShape {
  Circle = "circle",
  Rectangle = "rectangle",
}

export type TooltipProperties = {
  shape: MarkShape;
  x: number;
  y: number;
  radius?: number;
  height?: number;
  width?: number;
};

const SquadPositionMark: React.FC<SquadPositionMarkProps> = ({ position, members, properties }) => {
  const { shape, x, y, radius, width, height } = properties;

  const isValidCircle = shape === MarkShape.Circle && radius !== undefined;
  const isValidRectangle = shape === MarkShape.Rectangle && width !== undefined && height !== undefined;

  let result: React.ReactNode = null;

  if (isValidCircle) {
    result = (
      <SvgPositionCircleMark x={x} y={y} radius={radius} fill="red">
        <TooltipContent position={position} members={members} />
      </SvgPositionCircleMark>
    );
  }
  else if (isValidRectangle) {
    result = (
      <SvgPositionRectangleMark x={x} y={y} width={width} height={height} radius={1} fill="red">
        <TooltipContent position={position} members={members} />
      </SvgPositionRectangleMark>
    );
  };

  return result;
};

export default SquadPositionMark;
