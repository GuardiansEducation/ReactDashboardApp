import React from "react";
import { Container, Image, Tabs } from "@mantine/core";
import { useAppSelector } from "@hooks";
import { CompetitionState } from "../../store/CompetitionState";
import OverviewLayout from "./OverviewLayout";

const Overview: React.FC = () => {
  const competitions: CompetitionState[] = useAppSelector(
    (state) => state.competitions
  );

  return (
    <Container fluid>
      <Tabs
        variant="outline"
        defaultValue={competitions[3].area.name}
        color="orange"
      >
        <Tabs.List justify="space-between">
          {competitions.map((competition) => (
            <Tabs.Tab
              key={competition.code}
              value={competition.area.name}
              leftSection={
                <Image h={20} src={competition.area.flag} radius="md" />
              }
            >
              {competition.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {competitions.map((competition) => (
          <Tabs.Panel key={competition.code} value={competition.area.name}>
            <OverviewLayout content={competition.area.name}></OverviewLayout>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Container>
  );
};

export default Overview;
