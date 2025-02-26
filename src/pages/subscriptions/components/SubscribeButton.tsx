import { Button } from "@mantine/core";

export interface SubscribeButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ disabled, onClick }) => {
  return (
    <Button size="compact-xs" variant="gradient" onClick={onClick} disabled={disabled}>
      Subscribe
    </Button>
  );
};

export default SubscribeButton;
