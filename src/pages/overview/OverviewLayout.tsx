import { useState } from "react";
import { Grid, GridCol, Button, Text, Group, Progress } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import CompetitionStats from "./Stats/CompetitionStatistics";
import CompetitionMatches from "./Matches/CompetitionMatches";
import StandingsArea from "./Standings/StandingsArea";

export type OverviewLayoutProps = {
  content: string;
};

const initialIndex = 0;
const layoutContent = [<StandingsArea />, <CompetitionStats />, <CompetitionMatches />];

const OverviewLayout: React.FC<OverviewLayoutProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <Grid align="center" grow>
      <GridCol span="auto">
        <Button
          disabled={currentIndex === initialIndex}
          variant="transparent"
          fullWidth
          onClick={() => setCurrentIndex((index) => index - 1)}
        >
          <IconArrowLeft />
        </Button>
      </GridCol>
      <GridCol span={10}>
        <Text
          ta="center"
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "orange", to: "orange", deg: 360 }}
        >
          {content}
        </Text>
        {layoutContent[currentIndex]}
        <Group grow gap={5} mt="xs">
          {layoutContent.map((_, index) => (
            <Progress
              key={index}
              radius="xs"
              size="xs"
              transitionDuration={0}
              value={currentIndex == index ? 100 : 0}
              color="orange"
            />
          ))}
        </Group>
      </GridCol>
      <GridCol span="auto">
        <Button
          disabled={currentIndex === layoutContent.length - 1}
          variant="transparent"
          fullWidth
          onClick={() => setCurrentIndex((index) => index + 1)}
        >
          <IconArrowRight />
        </Button>
      </GridCol>
    </Grid>
  );
};

export default OverviewLayout;
