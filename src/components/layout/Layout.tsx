import { routes } from "@constants";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Image, Title } from "@mantine/core";
import { DashboardRouter, NavigateButton } from "@components";
import logo from "/logo.svg";
import { useAppSelector } from "@hooks";
import { SubscribedCompetition } from "@types";

const navigationLinks = [
  {
    text: "Subscriptions",
    route: routes.subscriptions,
  },
  {
    text: "Standings",
    route: routes.overviewStandings,
    requireSelectedOverview: true,
  },
  {
    text: "Statistics",
    route: routes.overviewStats,
    requireSelectedOverview: true,
  },
  {
    text: "Followed teams",
    route: routes.overviewFavoriteTeams,
    requireSelectedOverview: true,
  },
];

const Layout: React.FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const hasSubscribedItems = useAppSelector(
    (state) => state.subscription.subscriptions.length > 0
  );

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Image src={logo} alt="logo" h={50} />
          <Title size={"lg"}>Football Dashboard</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navigationLinks.map((item, index) => (
          <NavigateButton
            variant="gradient"
            mt="sm"
            key={index}
            navigateTo={item.route}
            disabled={!hasSubscribedItems && item.requireSelectedOverview}
          >
            {item.text}
          </NavigateButton>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <DashboardRouter />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
