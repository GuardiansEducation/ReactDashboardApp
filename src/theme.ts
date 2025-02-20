import {
  createTheme,
  Accordion,
  AppShell,
  Burger,
  Paper,
  Select,
  Title,
  MantineColorsTuple,
  Checkbox,
  Pagination,
  Tabs,
  Table,
} from "@mantine/core";

const primaryBackground = "#232233";
const secondaryBackground = "#1b1a27";
const tomatoColor: MantineColorsTuple = [
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
];

const customTheme = createTheme({
  colors: {
    tomato: tomatoColor,
  },
  fontFamily: "Inter, serif",
  primaryColor: "tomato",
  primaryShade: 7,
  defaultRadius: "md",
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
          borderColor: secondaryBackground,
          borderWidth: "3px",
        },
        navbar: {
          background: primaryBackground,
          borderColor: secondaryBackground,
          borderWidth: "3px",
        },
        main: {
          background: secondaryBackground,
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
    Select: Select.extend({
      styles: {
        input: {
          background: secondaryBackground,
        },
        dropdown: {
          background: secondaryBackground,
        },
      },
    }),
    Accordion: Accordion.extend({
      styles: {
        control: {
          background: secondaryBackground,
        },
        item: {
          background: secondaryBackground,
        },
      },
    }),
    Checkbox: Checkbox.extend({
      styles: {
        input: {
          background: primaryBackground,
        }
      }
    }),
    Pagination: Pagination.extend({
      vars: () => {
        return {
          root: {
            '--pagination-active-bg': 'tomato',
          },
        };
      },
    }),
    Tabs: Tabs.extend({

    }),
    Table: Table.extend({
      vars: () => {
        return {
          table: {
            '--table-striped-color': primaryBackground,
            '--table-highlight-on-hover-color': primaryBackground,
          }
        }
      },
    }),
  },
});

export default customTheme;
