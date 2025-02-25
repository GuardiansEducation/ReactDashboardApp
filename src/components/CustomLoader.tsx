import { Center, Loader } from "@mantine/core";

export type CustomLoaderProps = {
  size?: number;
};

const CustomLoader: React.FC<CustomLoaderProps> = ({ size = 20 }) => {
  return (
    <Center>
      <Loader size={size} />
    </Center>
  );
};

export default CustomLoader;
