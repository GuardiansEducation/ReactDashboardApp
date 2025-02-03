import { Center, Loader } from "@mantine/core";

export type OverviewLoaderProps = {
  size?: number;
};

const OverviewLoader: React.FC<OverviewLoaderProps> = ({ size = 20 }) => {
  return (
    <Center>
      <Loader size={size} />
    </Center>
  );
};

export default OverviewLoader;
