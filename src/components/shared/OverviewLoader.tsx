import { Center, Loader } from "@mantine/core";

const OverviewLoader: React.FC = () => {
  return (
    <Center>
      <Loader height={200} size={50} />
    </Center>
  );
};

export default OverviewLoader;
