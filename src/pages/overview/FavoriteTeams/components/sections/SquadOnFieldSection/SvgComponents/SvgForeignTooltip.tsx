import { Tooltip } from "@mantine/core";

export type SvgForeignTooltipProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  children: React.ReactNode;
};

const SvgForeignTooltip: React.FC<SvgForeignTooltipProps> = ({ x, y, width, height, children }) => {
  const tooltipPosition = height > width ? 'left' : 'top';
  const toolTipActivationEvents = { hover: true, focus: true, touch: true };
  const toolTipInnerStyle = { width: `${width}px`, height: `${height}px` };

  return (
    <foreignObject x={x} y={y} width={width} height={height}>
      <Tooltip
        label={children}
        position={tooltipPosition}
        events={toolTipActivationEvents}
      >
        <div style={toolTipInnerStyle} />
      </Tooltip>
    </foreignObject>
  );
};

export default SvgForeignTooltip;
