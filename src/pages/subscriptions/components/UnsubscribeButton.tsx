import { Button } from "@mantine/core";

export interface SubscribeButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

const UnsubscribeButton: React.FC<SubscribeButtonProps> = ({ disabled, onClick }) => {
  return (
    <Button color="red" size="compact-xs" variant="outline" onClick={onClick} disabled={disabled}>
      Unsubscribe
    </Button>
  );
};

export default UnsubscribeButton;
