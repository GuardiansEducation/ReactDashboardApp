import SvgForeignTooltip from "./SvgForeignTooltip";

export type SvgPositionRectangleMarkProps = {
  x: number;
  y: number;
  fill: string;
  width: number;
  height: number;
  radius?: number;
  children: React.ReactNode;
};

const SvgPositionRectangleMark: React.FC<SvgPositionRectangleMarkProps> = ({ x, y, width, height, radius, fill, children }) => {
  return (
    <>
      <rect x={x} y={y} width={width} height={height} rx={radius} ry={radius} fill={fill} />
      <SvgForeignTooltip x={x} y={y} width={width} height={height}>
        {children}
      </SvgForeignTooltip>
    </>
  );
};

export default SvgPositionRectangleMark;
