"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UseThemeStore = {
  themeColor: "light" | "dark";
  toggleTheme: (theme: UseThemeStore["themeColor"]) => void;
};

const useThemeStore = create(
  persist<UseThemeStore>(
    (set) => ({
      themeColor: "dark",
      toggleTheme: (currentTheme) => {
        return set({ themeColor: currentTheme });
      },
    }),
    {
      name: "theme",
    },
  ),
);

export default useThemeStore;
