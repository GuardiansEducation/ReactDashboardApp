import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "@components";
import { store } from "@store";
import "@mantine/core/styles.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider>
          <Layout />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
