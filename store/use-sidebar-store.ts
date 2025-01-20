"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UseSidebarStore = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const useSidebarStore = create(
  persist<UseSidebarStore>(
    (set) => ({
      isOpen: false,
      openSidebar: () => set({ isOpen: true }),
      closeSidebar: () => set({ isOpen: false }),
    }),
    {
      name: "sidebar",
    },
  ),
);

export default useSidebarStore;
