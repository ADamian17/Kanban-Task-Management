import { create } from "zustand";

export type UseBoardStoreState = {
  boardId: number | null;
  boardName: string;
};

export const useBoardStore = create<UseBoardStoreState>((set) => ({
  boardId: null,
  boardName: "",
}));
