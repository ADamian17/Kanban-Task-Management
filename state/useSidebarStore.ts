import { create } from "zustand";

export type UseSidebarStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: UseSidebarStore["isOpen"]) => void;
};

const useSidebarStore = create<UseSidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useSidebarStore;
