import { Grid, GridCol, Button, Text } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import CompetitionStats from "./CompetitionStats";
import CompetitionTable from "./CompetitionTable";
import CompetitionMatches from "./CompetitionMatches";
import { useState } from "react";

export type OverviewLayoutProps = {
  content: string;
};

const pages = [
  <CompetitionTable />,
  <CompetitionStats />,
  <CompetitionMatches />,
];

const OverviewLayout: React.FC<OverviewLayoutProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((index) => (index + 1) % pages.length);
  };

  const previousComponent = () => {
    setCurrentIndex((index) => (index - 1 + pages.length) % pages.length);
  };

  return (
    <Grid align="center" grow>
      <GridCol span="auto">
        <Button variant="transparent" fullWidth onClick={previousComponent}>
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
        {pages[currentIndex]}
      </GridCol>
      <GridCol span="auto">
        <Button variant="transparent" fullWidth onClick={nextComponent}>
          <IconArrowRight />
        </Button>
      </GridCol>
    </Grid>
  );
};

export default OverviewLayout;
