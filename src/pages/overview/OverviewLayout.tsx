import { Center, Container, Image, Tabs, Space } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "@hooks";
import { CommonAlert } from "@components";
import { selectOverviewCompetition } from "@store";
import { SubscribedCompetition } from "@types";
import classes from "./OverviewLayout.module.css";
import PageHeaderLayout from "../PageHeaderLayout";

export type OverviewLayoutProps = {
  children: React.ReactNode;
  headerText: string;
};

const OverviewLayout: React.FC<OverviewLayoutProps> = ({ children, headerText }) => {
  const dispatch = useAppDispatch();
  const { subscriptions, selectedOverviewCompetition } = useAppSelector(
    (state) => state.subscription
  );

  const hasItems = subscriptions.length > 0;
  const hasSelectedCompetition = selectedOverviewCompetition?.code !== undefined;
  const isTabsVisible = hasItems && hasSelectedCompetition;

  const tabChangeHandler = (code?: string | null) => {
    if (code) {
      dispatch(selectOverviewCompetition({ code }));
    }
  };

  const renderTab = (competition: SubscribedCompetition, index: number) => {
    const { code, area } = competition;

    const competitionFlag = <Image h={20} src={area.flag} radius="md" />;

    return (
      <Tabs.Tab key={area.code + index} value={code} leftSection={competitionFlag}>
        {area.name}
      </Tabs.Tab>
    );
  };

  const tabsComponent = selectedOverviewCompetition && (
    <Tabs
      keepMounted={false}
      defaultValue={selectedOverviewCompetition.code}
      variant="pills"
      color="orange"
      onChange={tabChangeHandler}
      classNames={classes}
    >
      <Tabs.List justify="center" grow>
        {subscriptions.map(({ competition }, index) => renderTab(competition, index))}
      </Tabs.List>
      <Tabs.Panel value={selectedOverviewCompetition.code}>
        <Space h="md" />
        <PageHeaderLayout
          image={<Image w={70} h={70} src={selectedOverviewCompetition.emblem} />}
          content={headerText}
        />
        {children}
      </Tabs.Panel>
    </Tabs>
  );

  const noSubscriptionsComponent = (
    <Center mih="50vh">
      <CommonAlert title="No subscriptions made" message="Please choose your subscriptions" />
    </Center>
  );

  return (
    <Container fluid p={0}>
      {isTabsVisible ? tabsComponent : noSubscriptionsComponent}
    </Container>
  );
};

export default OverviewLayout;
