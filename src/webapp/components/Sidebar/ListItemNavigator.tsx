import { ExpandLess, ExpandMore, PointOfSale } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SidebarItem } from "../../../types/types";
import { useState } from "react";
import { usePreferencesStore } from "../../../stores/usePreferences";

function ListItemNavigator({ item }: { item: SidebarItem }) {
  const FONT_SIZE = "0.8rem";

  const [open, setOpen] = useState(false);

  const handleClickBtn = () => {
    setOpen(!open);
  };

  const { isSidebarOpen } = usePreferencesStore();
  return (
    <>
      <ListItemButton onClick={handleClickBtn} sx={{ my: 1 }}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} sx={{ fontSize: FONT_SIZE }} />
        {item.nestedItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {item.nestedItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.nestedItems.map((nestedItem) => {
              return (
                <ListItemButton
                  sx={{
                    pl: isSidebarOpen ? 4 : 2,
                    transition: "0.3s",
                  }}
                  key={nestedItem.id}
                >
                  {nestedItem.icon}
                  <ListItemText
                    sx={{
                      ml: 4,
                      fontSize: FONT_SIZE,
                      display: isSidebarOpen ? "block" : "none",
                      transition: "0.3s",
                    }}
                    primary={nestedItem.title}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default ListItemNavigator;
