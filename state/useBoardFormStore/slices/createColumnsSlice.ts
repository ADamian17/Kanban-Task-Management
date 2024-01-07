import { StateCreator } from "zustand";

import { InputProps } from "@/components/DynamicInputs";

export type ColumnsSlice = {
  mappedColumns: Record<string, InputProps>;
  columns: InputProps[];
  addColumn: () => void;
  removeColumn: (id: string) => void;
  onSetColumnError: (id: string, error: boolean) => void;
  onSetColumnValue: (id: string, value: string) => void;
  setResetColumnsName: () => void;
};

const initialState = {
  mappedColumns: {},
  columns: [],
};

export const createColumnsSlice: StateCreator<ColumnsSlice> = (set, get) => ({
  ...initialState,
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
  onSetColumnValue: (id, value) => {
    const mappedColumns = get().mappedColumns;
    const updatedColumn = {
      ...mappedColumns[id],
      value,
    };

    const updatedMappedColumns = {
      ...mappedColumns,
      [id]: updatedColumn,
    };
    const updatedColumns = Object.values(updatedMappedColumns);

    set({
      mappedColumns: updatedMappedColumns,
      columns: updatedColumns,
    });
  },
  onSetColumnError: (id, error) => {
    const mappedColumns = get().mappedColumns;
    const updatedColumn = {
      ...mappedColumns[id],
      error,
    };

    const updatedMappedColumns = {
      ...mappedColumns,
      [id]: updatedColumn,
    };
    const updatedColumns = Object.values(updatedMappedColumns);

    set({
      mappedColumns: updatedMappedColumns,
      columns: updatedColumns,
    });
  },
  setResetColumnsName: () => set(initialState),
});
