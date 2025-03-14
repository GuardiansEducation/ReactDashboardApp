import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CognitoConfigProvider } from "@components";
import { MockAuthProvider } from "@contexts";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CognitoConfigProvider>
      <MockAuthProvider>
        <App />
      </MockAuthProvider>
    </CognitoConfigProvider>
  </StrictMode>
);
