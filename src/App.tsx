import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { DashboardRouter, Layout } from "@pages";
import { authConfiguration } from "@services";
import { AuthProvider } from "react-oidc-context";
import { store } from "@store";
import customTheme from "./theme";

import "@mantine/core/styles.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider {...authConfiguration}>
        <Provider store={store}>
          <MantineProvider theme={customTheme} defaultColorScheme="dark">
            <Layout>
              <DashboardRouter />
            </Layout>
          </MantineProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
