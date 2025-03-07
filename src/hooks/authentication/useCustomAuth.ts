import { useAuth, AuthContextProps } from "react-oidc-context";
import { useContext } from "react";
import { signOutRedirect } from "@constants";
import { MockAuthContext } from "../../contexts";

type CustomAuthType = Pick<
  AuthContextProps,
  "isAuthenticated" | "isLoading" | "removeUser" | "signinRedirect"
> & {
  signOutRedirect: () => void;
};

export const useCustomAuth = (): CustomAuthType => {
  const { isAuthenticated, setAuth } = useContext(MockAuthContext);

  const removeUser = () => Promise.resolve(console.log("remove user"));

  const customSignOutRedirect = () => {
    setAuth(false);
  };

  const signinRedirect = async () => {
    setAuth(true);
    window.location.href = POST_LOGIN_URI;
  };

  const auth = useAuth();

  return USE_CUSTOM_AUTH
    ? {
        isAuthenticated: isAuthenticated,
        isLoading: false,
        removeUser,
        signinRedirect,
        signOutRedirect: customSignOutRedirect,
      }
    : { ...auth, signOutRedirect };
};
