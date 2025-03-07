import { Navigate } from "react-router-dom";
import { routes } from "@constants";
import { useCustomAuth } from "@hooks";

export type PrivateRouteProp = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProp> = ({ children }) => {
  const { isAuthenticated, isLoading } = useCustomAuth();
  const notAuthenticatedComponent = !isLoading && <Navigate to={routes.login} />;

  return isAuthenticated ? children : notAuthenticatedComponent;
};

export default PrivateRoute;
