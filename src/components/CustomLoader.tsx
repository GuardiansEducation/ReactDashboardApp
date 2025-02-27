import { Flex, Loader, Text } from "@mantine/core";
import { useApiThrottlingInfo } from "@hooks";

export type CustomLoaderProps = {
  size?: number;
  variant?: "vertical" | "horizontal";
};

const CustomLoader: React.FC<CustomLoaderProps> = ({ size = 20, variant = "vertical" }) => {
  const { isApiThrottled, waitingTime } = useApiThrottlingInfo();
  const flexDirection = variant == "vertical" ? "column" : "row";

  return (
    <Flex justify="center" align="center" direction={flexDirection} gap="xs">
      <Loader size={size} />
      {isApiThrottled && (
        <Text ta="center">
          API limited... {waitingTime}
        </Text>
      )}
    </Flex>
  );
};

export default CustomLoader;
