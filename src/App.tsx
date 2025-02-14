import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "@components";
import { store } from "@store";
import customTheme from "./theme";

import "@mantine/core/styles.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider theme={customTheme} defaultColorScheme="dark">
          <Layout />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
