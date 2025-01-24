import React from "react";
import { Container, Image, Stack, Tabs } from "@mantine/core";
import { useAppSelector } from "@hooks";
import OverviewLayout from "./OverviewLayout";
import { Subscription } from "../../types/store";
import { CommonAlert } from "@components";

const Overview: React.FC = () => {
  const subscriptions: Subscription[] = useAppSelector(
    (state) => state.subscription.subscriptions
  );

  const hasItems = subscriptions.length > 0;

  return (
    <Container fluid>
      {hasItems ? (
        <Tabs
          variant="outline"
          defaultValue={subscriptions[3].area.name}
          color="orange"
        >
          <Tabs.List justify="space-between">
            {subscriptions.map((subscription) => (
              <Tabs.Tab
                key={subscription.competition.area.code}
                value={subscription.competition.area.name}
                leftSection={
                  <Image h={20} src={subscription.competition.area.flag} radius="md" />
                }
              >
                {subscription.competition.area.name}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {subscriptions.map((subscription) => (
            <Tabs.Panel key={subscription.competition.code} value={subscription.competition.area.name}>
              <OverviewLayout content={subscription.competition.name}></OverviewLayout>
            </Tabs.Panel>
          ))}
        </Tabs>
      ) : (
        <Stack
          align="center"
          justify="center"
        >
          <CommonAlert title="No subscriptions made" message="Please choose your subscriptions" />
        </Stack>
      )}
    </Container>
  );
};

export default Overview;
