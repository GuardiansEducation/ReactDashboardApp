import { Button, Flex, Group, Paper, Text } from "@mantine/core";
import { useEffect } from "react";
import { useCustomAuth } from "@hooks";

const Login: React.FC = () => {
  const { signinRedirect, removeUser } = useCustomAuth();

  useEffect(() => {
    removeUser();
  }, [removeUser]);

  return (
    <Flex align="center" justify="center" h="60vh">
      <Paper p="xl" w={{ base: "100vw", md: "60vw", lg: "35vw" }}>
        <Text size="xl" fw="bold" ta="center">
          🌟 Welcome, Football Fan! 🌟
        </Text>
        <Text size="lg" fw="bold" ta="center" mt="lg">
          The gates of our enchanted realm stand before you, shimmering with untold insights and
          boundless football statistics.
        </Text>
        <Group mt="xl" justify="center">
          <Text>
            <Button size="md" onClick={() => signinRedirect()}>
              Sign in
            </Button>
          </Text>
        </Group>
      </Paper>
    </Flex>
  );
};

export default Login;
