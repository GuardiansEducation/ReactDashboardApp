import { AuthProviderProps } from "react-oidc-context";

const clientId = "741ls40f63jva677ge7od600cq";

export const CognitoProviderConfigs: AuthProviderProps = Object.freeze({
  authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_JghaMrCd1",
  client_id: clientId,
  redirect_uri: POST_LOGIN_URI,
  response_type: "code",
  scope: "email openid phone",
});

export const signOutRedirect = () => {
  const logoutUri = POST_LOGOUT_URI;
  const cognitoDomain = "https://eu-central-1jghamrcd1.auth.eu-central-1.amazoncognito.com";
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
    logoutUri
  )}`;
};
