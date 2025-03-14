import { AuthProvider, AuthProviderProps } from "react-oidc-context";

export type CognitoConfigProviderProps = {
  children: React.ReactNode;
};

const cognitoProviderConfigs: AuthProviderProps = Object.freeze({
  authority: COGNITO_AUTHORITY,
  client_id: COGNITO_OIDC_CLIENT_ID,
  redirect_uri: POST_LOGIN_URI,
  response_type: "code",
  scope: "email openid phone",
});

const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

const CognitoConfigProvider: React.FC<CognitoConfigProviderProps> = ({ children }) => {
  return (
    <AuthProvider {...cognitoProviderConfigs} onSigninCallback={onSigninCallback}>
      {children}
    </AuthProvider>
  );
};

export default CognitoConfigProvider;
