import { InputProps } from "@/components/DynamicInputs";
import { create, StateCreator } from "zustand";

export type BoardNameSlice = {
  value: string;
  error: boolean;
  setValue: (value: string) => void;
  setError: (error: boolean) => void;
};

export type ColumnsSlice = {
  mappedColumns: Record<string, InputProps>;
  columns: InputProps[];
  addColumn: () => void;
  removeColumn: (id: string) => void;
};

export const createBoardNameSlice: StateCreator<BoardNameSlice> = (set) => ({
  value: "",
  error: false,
  setError: (error) => set({ error }),
  setValue: (value) => set({ value }),
});

export const createColumnsSlice: StateCreator<ColumnsSlice> = (set, get) => ({
  mappedColumns: {},
  columns: [],
  addColumn: () => {
    const columnsCount = get().columns.length;
    const key = `col-${columnsCount}`;
    set((prev) => {
      const updatedMappedColumns = {
        ...prev.mappedColumns,
        [key]: { id: key, value: "", error: false },
      };
      const updatedColumns = Object.values(updatedMappedColumns);

      return {
        ...prev,
        mappedColumns: updatedMappedColumns,
        columns: updatedColumns,
      };
    });
  },
  removeColumn: (id) => {
    const updatedMappedColumns = get().mappedColumns;

    if (!updatedMappedColumns[id]) return;
    delete updatedMappedColumns[id];

    const updatedColumns = Object.values(updatedMappedColumns);

    set((prev) => ({
      ...prev,
      mappedColumns: updatedMappedColumns,
      columns: updatedColumns,
    }));
  },
});

export const useBoardFormStore = create<BoardNameSlice & ColumnsSlice>()(
  (...a) => ({
    ...createBoardNameSlice(...a),
    ...createColumnsSlice(...a),
  }),
);
