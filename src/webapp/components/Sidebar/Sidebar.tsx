import { SidebarContainer } from "./Sidebar.styles";
import { List, Chip } from "@mui/material";
import { Storefront } from "@mui/icons-material";
import { usePreferencesStore } from "../../../stores/usePreferences";
import ListItemNavigator from "./ListItemNavigator";
import { SIDEBAR_DATA } from "../../../utils/frontendData";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const AVATAR_SIZE = 98;

function Sidebar() {
  const { isSidebarOpen } = usePreferencesStore();

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: isSidebarOpen ? AVATAR_SIZE : 32,
    height: isSidebarOpen ? AVATAR_SIZE : 32,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", my: 3 }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </StyledBadge>
        {isSidebarOpen && (
          <Chip
            sx={{ marginTop: 1 }}
            icon={<Storefront />}
            color="primary"
            label="Leticias Coffe Shop"
          />
        )}
      </Stack>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "transparent",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {SIDEBAR_DATA.map((item) => {
          return <ListItemNavigator item={item} />;
        })}
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;
