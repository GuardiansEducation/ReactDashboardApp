import { useAuth, AuthContextProps } from "react-oidc-context";
import { useContext } from "react";
import { MockAuthContext } from "@contexts";

type CustomAuthType = Pick<
  AuthContextProps,
  "isAuthenticated" | "isLoading" | "removeUser" | "signinRedirect"
> & {
  signOutRedirect: () => void;
};

const signOutRedirect = () => {
  const logoutUri = encodeURIComponent(POST_LOGOUT_URI);
  const uri = `${COGNITO_ROOT_DOMAIN}/logout?client_id=${COGNITO_OIDC_CLIENT_ID}&logout_uri=${logoutUri}`;

  window.location.href = uri;
};

export const useCustomAuth = (): CustomAuthType => {
  const { isAuthenticated, setIsAuthenticated } = useContext(MockAuthContext);

  const removeUser = () => Promise.resolve(console.log("remove user"));
  const customSignOutRedirect = () => {
    setIsAuthenticated(false);
  };
  const signinRedirect = async () => {
    setIsAuthenticated(true);
    window.location.href = POST_LOGIN_URI;
  };

  const auth = useAuth();

  return USE_CUSTOM_AUTH
    ? {
      isAuthenticated,
      isLoading: false,
      removeUser,
      signinRedirect,
      signOutRedirect: customSignOutRedirect,
    }
    : { ...auth, signOutRedirect };
};
