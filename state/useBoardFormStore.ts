import { create, StateCreator } from "zustand";

export type BoardNameSlice = {
  value: string;
  error: boolean;
  setValue: (value: string) => void;
  setError: (error: boolean) => void;
};

export const createBoardNameSlice: StateCreator<BoardNameSlice> = (set) => ({
  value: "",
  error: false,
  setError: (error) => set({ error }),
  setValue: (value) => set({ value }),
});

export const useBoardFormStore = create<BoardNameSlice>((...a) => ({
  ...createBoardNameSlice(...a),
}));
