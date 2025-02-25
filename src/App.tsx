import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { DashboardRouter, Layout } from "@pages";
import { store } from "@store";
import customTheme from "./theme";

import "@mantine/core/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider theme={customTheme} defaultColorScheme="dark">
          <Layout>
            <DashboardRouter />
          </Layout>
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
