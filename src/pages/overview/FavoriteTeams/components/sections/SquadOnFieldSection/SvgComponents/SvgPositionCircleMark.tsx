import SvgForeignTooltip from "./SvgForeignTooltip";

export type SvgPositionCircleMarkProps = {
  x: number;
  y: number;
  fill: string;
  radius: number;
  children: React.ReactNode;
};

const SvgPositionCircleMark: React.FC<SvgPositionCircleMarkProps> = ({ x, y, radius, fill, children }) => {
  return (
    <>
      <circle cx={x + radius} cy={y + radius} r={radius} fill={fill} />
      <SvgForeignTooltip x={x} y={y} width={radius * 2} height={radius * 2}>
        {children}
      </SvgForeignTooltip>
    </>
  );
};

export default SvgPositionCircleMark;
