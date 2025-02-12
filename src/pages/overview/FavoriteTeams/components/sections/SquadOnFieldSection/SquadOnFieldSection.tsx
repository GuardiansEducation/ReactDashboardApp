import { Tooltip, Flex, Center, Text, Stack, Group, SimpleGrid } from "@mantine/core";
import { TeamMember, TeamMemberPosition } from "@types";
import { CountryFlag } from "@components";

export type SquadOnFieldSectionProps = {
  squad: TeamMember[];
};

const SquadOnFieldSection: React.FC<SquadOnFieldSectionProps> = ({ squad }) => {
  const squadOnField = squad.reduce((acc, member) => {
    const { position } = member;

    if (!acc[position]) {
      acc[position] = [];
    }

    acc[position].push(member);

    return acc;
  }, {} as { [key: string]: TeamMember[] });

  const getTooltipContent = (position: TeamMemberPosition, members: TeamMember[]) => {
    const renderMember = (member: TeamMember, index: number) => (
      <Group key={index} wrap="nowrap" gap={5}>
        <CountryFlag countryFullName={member.nationality} />
        <Text>{member.name}</Text>
      </Group>
    );

    const columnCount = members.length > 3 ? 2 : 1;

    return (
      <Stack gap={0}>
        <Center>
          <Text fw="bold">{position}</Text>
        </Center>
        <SimpleGrid cols={columnCount} spacing="xs" verticalSpacing={0}>
          {members.map((member, index) => renderMember(member, index))}
        </SimpleGrid>
      </Stack>
    )
  };

  const renderCircleTooltip = (position: TeamMemberPosition, x: number, y: number) => {
    const memberOnPosition = squadOnField[position] || [];

    if (memberOnPosition.length === 0) {
      return null;
    }

    const toolTipContent = getTooltipContent(position, memberOnPosition);

    return (
      <>
        <circle cx={x + 4} cy={y + 4} r="2" fill="red" />
        <foreignObject x={x} y={y} width="8" height="8">
          <Tooltip label={toolTipContent} events={{ hover: true, focus: true, touch: true }}>
            <div style={{ width: '8px', height: '8px' }} />
          </Tooltip>
        </foreignObject>
      </>
    )
  };

  const renderRectangleTooltip = (position: TeamMemberPosition, x: number, y: number, width: number, height: number) => {
    const memberOnPosition = squadOnField[position] || [];

    if (memberOnPosition.length === 0) {
      return null;
    }

    const toolTipContent = getTooltipContent(position, memberOnPosition);
    const tooltipPosition = width > height ? 'top' : 'left';

    return (
      <>
        <rect x={x} y={y} width={width} height={height} rx="2" ry="2" fill="red" />
        <foreignObject x={x} y={y} width={width} height={height}>
          <Tooltip label={toolTipContent} position={tooltipPosition} events={{ hover: true, focus: true, touch: true }}>
            <div style={{ width: `${width}px`, height: `${height}px` }} />
          </Tooltip>
        </foreignObject>
      </>
    );
  };

  const defence = renderRectangleTooltip(TeamMemberPosition.Defence, -2, 73, 4, 28);
  const midfield = renderRectangleTooltip(TeamMemberPosition.Midfield, -2, 38.5, 4, 28);
  const offence = renderRectangleTooltip(TeamMemberPosition.Offence, -2, 4, 4, 28);

  const goalKeeper = renderCircleTooltip(TeamMemberPosition.Goalkeeper, 30, 98.3);

  const leftBack = renderCircleTooltip(TeamMemberPosition.LeftBack, 8, 75);
  const centerBack = renderRectangleTooltip(TeamMemberPosition.CentreBack, 20, 77, 28, 4);
  const rightBack = renderCircleTooltip(TeamMemberPosition.RightBack, 52, 75);

  const defensiveMidfield = renderRectangleTooltip(TeamMemberPosition.DefensiveMidfield, 20, 62.5, 28, 4);
  const centralMidfield = renderRectangleTooltip(TeamMemberPosition.CentralMidfield, 20, 50.5, 28, 4);
  const attackingMidfield = renderRectangleTooltip(TeamMemberPosition.AttackingMidfield, 20, 38.5, 28, 4);

  const leftWinger = renderCircleTooltip(TeamMemberPosition.LeftWinger, 8, 22);
  const centerForward = renderRectangleTooltip(TeamMemberPosition.CentreForward, 20, 24, 28, 4);
  const rightWinger = renderCircleTooltip(TeamMemberPosition.RightWinger, 52, 22);

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

          {defence}
          {midfield}
          {offence}

          {leftWinger}
          {centerForward}
          {rightWinger}

          {attackingMidfield}
          {centralMidfield}
          {defensiveMidfield}

          {leftBack}
          {centerBack}
          {rightBack}

          {goalKeeper}
        </g>
      </svg>
    </Flex>
  );
};

export default SquadOnFieldSection;
