import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { MockAuthProvider } from "./contexts";
import { CognitoProviderConfigs } from "@constants";

import App from "./App.tsx";

import "./index.css";

const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...CognitoProviderConfigs} onSigninCallback={onSigninCallback}>
      <MockAuthProvider>
        <App />
      </MockAuthProvider>
    </AuthProvider>
  </StrictMode>
);
