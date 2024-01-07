import { StateCreator } from "zustand";

type BoardNameState = {
  value: string;
  error: boolean;
};

type BoardNameActions = {
  setValue: (value: string) => void;
  setError: (error: boolean) => void;
  setResetBoardName: () => void;
};

export type BoardNameSlice = BoardNameActions & BoardNameState;

const initialState: BoardNameState = {
  value: "",
  error: false,
};

export const createBoardNameSlice: StateCreator<BoardNameSlice> = (set) => ({
  ...initialState,
  setError: (error) => set({ error }),
  setValue: (value) => set({ value }),
  setResetBoardName: () => set(initialState),
});
