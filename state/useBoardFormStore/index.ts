import { create } from "zustand";

import { ColumnsSlice, createColumnsSlice } from "./slices/createColumnsSlice";
import {
  createBoardNameSlice,
  BoardNameSlice,
} from "./slices/createBoardNameSlice";

export const useBoardFormStore = create<BoardNameSlice & ColumnsSlice>()(
  (...a) => ({
    ...createBoardNameSlice(...a),
    ...createColumnsSlice(...a),
  }),
);
