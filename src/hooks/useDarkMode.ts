import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;
