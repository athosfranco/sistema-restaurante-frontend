import create from "zustand";

interface PreferencesState {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
}

interface PreferencesActions {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const usePreferencesStore = create<
  PreferencesState & PreferencesActions
>((set) => ({
  isSidebarOpen: true,
  isDarkMode: false,
  setIsSidebarOpen: (isSidebarOpen: boolean) => set({ isSidebarOpen }),
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
}));
