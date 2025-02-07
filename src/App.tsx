import { AppShell, Burger, createTheme, MantineProvider, Paper, Title } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "@components";
import { store } from "@store";
import "@mantine/core/styles.css";
import "./App.css";

function App() {
  const primaryBackground = "#232233";
  const secondaryBackround = "#1b1a27";
  const theme = createTheme({
    colors: {
      tomato: [
        "#ffeae6",
        "#ffd4cf",
        "#fea99e",
        "#fb7a69",
        "#f8523c",
        "#f73920",
        "#f72a10",
        "#dd1c05",
        "#c51402",
        "#ad0600",
      ],
    },
    defaultGradient: {
      from: "tomato",
      to: "orange",
      deg: 90,
    },
    components: {
      AppShell: AppShell.extend({
        styles: {
          header: {
            background: primaryBackground,
            borderColor: secondaryBackround,
            borderWidth: "3px",
          },
          navbar: {
            background: primaryBackground,
            borderColor: secondaryBackround,
            borderWidth: "3px",
          },
          main: {
            background: secondaryBackround,
          },
        },
      }),
      Paper: Paper.extend({
        styles: {
          root: {
            background: primaryBackground,
            borderColor: primaryBackground,
          },
        },
      }),
      Title: Title.extend({
        styles: {
          root: {
            color: "tomato",
          },
        },
      }),
      Burger: Burger.extend({
        defaultProps: {
          color: "tomato",
        },
      }),
    },
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Layout />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
