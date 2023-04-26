import Topbar from "../../components/Topbar/Topbar";
import { DashboardPageContainer, MainContainer } from "./Dashboard.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ThemeProvider } from "@mui/material/styles";

function Dashboard() {
  return (
    <DashboardPageContainer>
      <Sidebar />
      <MainContainer>
        <Topbar />
      </MainContainer>
    </DashboardPageContainer>
  );
}

export default Dashboard;
