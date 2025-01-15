import React from "react";
import { useNavigate } from "react-router";
import { Button, ButtonProps } from "@mantine/core";

export type NavigationButtonProps = ButtonProps & {
  navigateTo: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  navigateTo,
  children,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default NavigationButton;
