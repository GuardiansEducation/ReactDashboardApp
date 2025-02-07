import React from "react";
import { routes } from "@constants";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Image, MantineTheme, Title } from "@mantine/core";
import { DashboardRouter, NavigateButton } from "@components";
import logo from "/logo.svg";

const navigationLinks = [
  {
    text: "Countries",
    route: routes.countries,
  },
  {
    text: "Overview",
    route: routes.overview,
  },
];

const Layout: React.FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

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
          <Image src={logo} alt="logo" h={50} radius="md" />
          <Title size={"lg"}>Football Dashboard</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navigationLinks.map((item, index) => (
          <NavigateButton variant="gradient" mt="sm" key={index} navigateTo={item.route}>
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
