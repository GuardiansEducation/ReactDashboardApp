import React from "react";
import { Container, Image, Stack, Tabs } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "@hooks";
import OverviewLayout from "./OverviewLayout";
import { Subscription, SubscribedCompetition } from "../../types/store";
import { CommonAlert } from "@components";
import { selectOverviewCompetition } from "../../store/slices/subscriptionSlice";

const Overview: React.FC = () => {
  const dispatch = useAppDispatch();
  const subscriptions: Subscription[] = useAppSelector((state) => state.subscription.subscriptions);

  const selectedOverview: SubscribedCompetition | undefined = useAppSelector(
    (state) => state.subscription.selectedOverviewCompetition
  );

  const hasItems = subscriptions.length > 0;

  return (
    <Container fluid>
      {hasItems ? (
        <Tabs
          keepMounted={false}
          variant="outline"
          defaultValue={selectedOverview?.code}
          color="orange"
          onChange={(code) => {
            dispatch(selectOverviewCompetition({ code }));
          }}
        >
          <Tabs.List justify="space-between">
            {subscriptions.map((subscription) => (
              <Tabs.Tab
                key={subscription.competition.area.code}
                value={subscription.competition.code}
                leftSection={<Image h={20} src={subscription.competition.area.flag} radius="md" />}
              >
                {subscription.competition.area.name}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {subscriptions.map((subscription) => (
            <Tabs.Panel key={subscription.competition.code} value={subscription.competition.code}>
              <OverviewLayout content={subscription.competition.name}></OverviewLayout>
            </Tabs.Panel>
          ))}
        </Tabs>
      ) : (
        <Stack align="center" justify="center">
          <CommonAlert title="No subscriptions made" message="Please choose your subscriptions" />
        </Stack>
      )}
    </Container>
  );
};

export default Overview;
