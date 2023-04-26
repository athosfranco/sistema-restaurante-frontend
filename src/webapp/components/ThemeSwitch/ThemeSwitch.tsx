import { Switch, styled } from "@mui/material";
import { usePreferencesStore } from "../../../stores/usePreferences";

const ThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = usePreferencesStore();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleToggle}
      icon={<LightIcon />}
      checkedIcon={<DarkIcon />}
    />
  );
};

const LightIcon = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "50%",
  width: 16,
  height: 16,
});

const DarkIcon = styled(LightIcon)({
  backgroundColor: "#000",
});

export default ThemeSwitch;
