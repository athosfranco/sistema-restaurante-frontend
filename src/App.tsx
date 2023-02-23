import "./App.css";
import {
  Button,
  Card,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: "#3f51b5",
          },
          secondary: {
            main: "#f50057",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
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
      <Card sx={{ p: 10 }}>
        <div>
          <h2>Vite + React + MUI + Zustand + Router + Recharts + dayjs </h2>
          <Button color="primary" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Tema claro" : "Tema escuro"}
          </Button>
        </div>
        <Typography variant="body1" className="card">
          Template by{" "}
          <a href="https://github.com/athosfranco" target="_blank">
            Athos Franco
          </a>
        </Typography>
      </Card>
    </ThemeProvider>
  );
}

export default App;
