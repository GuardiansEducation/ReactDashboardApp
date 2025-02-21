import { Alert, AlertProps } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export type CommonAlertProps = AlertProps & {
  message: string;
};

const CommonAlert: React.FC<CommonAlertProps> = ({ message, title }) => {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="filled" color="orange" title={title} icon={icon}>
      {message}
    </Alert>
  );
}

export default CommonAlert;
