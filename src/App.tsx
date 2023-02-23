import reactLogo from "./assets/react.svg";
import "./App.css";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React + MUI + Zustand + Router + Recharts + dayjs </h2>

      <Typography variant="body1" className="card">
        Template by{" "}
        <a href="https://github.com/athosfranco" target="_blank">
          Athos Franco
        </a>
      </Typography>
    </div>
  );
}

export default App;
