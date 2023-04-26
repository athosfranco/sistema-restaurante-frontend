import { createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import Dashboard from "./webapp/pages/Dashboard/Dashboard";
import { usePreferencesStore } from "./stores/usePreferences";

function App() {
  const { isDarkMode } = usePreferencesStore();
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
        palette: {
          mode: isDarkMode ? "dark" : "light",
          background: {
            default: isDarkMode ? "#303030" : "#fafafa",
            paper: isDarkMode ? "#1e1e1e" : "#fafafa",
          },

          primary: {
            light: "#7986cb",
            main: "#DD5353",
            dark: "#303f9f",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff4081",
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 18,
              },
            },
            defaultProps: {
              disableElevation: true,
              variant: "contained",
            },
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
