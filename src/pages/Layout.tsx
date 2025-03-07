import { AppShell, Burger, Button, Group, Image, Title } from "@mantine/core";
import { routes } from "@constants";
import { useDisclosure } from "@mantine/hooks";
import { NavigateButton } from "@components";
import { useAppSelector, useCustomAuth } from "@hooks";

import logo from "/logo.svg";

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

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated, removeUser, signOutRedirect } = useCustomAuth();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const hasSubscribedItems = useAppSelector((state) => state.subscription.subscriptions.length > 0);

  const signOut = () => {
    removeUser().then(() => {
      signOutRedirect();
    });
  };

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
          {isAuthenticated && (
            <Button ml="auto" onClick={() => signOut()}>
              Sign out
            </Button>
          )}
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
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
