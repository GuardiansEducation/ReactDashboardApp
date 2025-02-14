import { Tooltip } from "@mantine/core";
import { TeamMember, TeamMemberPosition } from "@types";
import TooltipContent from "./TooltipContent";

export type SvgPositionMarkProps = {
  position: TeamMemberPosition;
  properties: MarkProperties;
  members: TeamMember[];
};

export type MarkProperties = {
  x: number;
  y: number;
  radius: number;
  fill: string;
  text?: string;
  textColor: string;
  textSize: string;
};

const SvgPositionMark: React.FC<SvgPositionMarkProps> = ({ position, members, properties }) => {
  const { x, y, radius, fill, text = "", textColor, textSize } = properties;

  const size = radius * 2;
  const toolTipInnerStyle = { width: `${size}px`, height: `${size}px` };
  const toolTipActivationEvents = { hover: true, focus: true, touch: true };
  const tooltipContent = <TooltipContent position={position} members={members} />

  return (
    <>
      <circle cx={x + radius} cy={y + radius} r={radius} fill={fill} />
      <text
        x={x + radius}
        y={y + radius + 0.3}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={textColor}
        stroke="none"
        fontSize={textSize}
        fontWeight="bold"
      >
        {text}
      </text>
      <foreignObject x={x} y={y} width={size} height={size}>
        <Tooltip
          label={tooltipContent}
          position="top"
          events={toolTipActivationEvents}
        >
          <div style={toolTipInnerStyle} />
        </Tooltip>
      </foreignObject>
    </>
  );
};

export default SvgPositionMark;
