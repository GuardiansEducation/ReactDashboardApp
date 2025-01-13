import { MantineProvider } from "@mantine/core";
import { Provider } from 'react-redux'
import { store } from "./store/store";
import Layout from "./components/layout/Layout";
import "@mantine/core/styles.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <Layout />
      </MantineProvider>
    </Provider>
  );
}

export default App;
