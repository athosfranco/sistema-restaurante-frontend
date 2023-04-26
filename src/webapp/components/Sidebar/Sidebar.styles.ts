import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

interface SidebarContainerProps {
  isSidebarOpen: boolean;
}

export const SidebarContainer = styled(Card)<SidebarContainerProps>`
  height: 100vh;
  border-radius: 0;
  flex: ${({ isSidebarOpen }) => (isSidebarOpen ? 1 : 0.2)};
  transition: 0.3s;
`;
