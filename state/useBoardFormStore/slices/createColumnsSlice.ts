import { InputProps } from "@/types";
import { StateCreator } from "zustand";

type ColumnsState = {
  mappedColumns: Record<string, InputProps>;
  columns: InputProps[];
};

type ColumnsActions = {
  addColumn: () => void;
  onSetColumnError: (id: string, error: boolean) => void;
  onSetColumnValue: (id: string, value: string) => void;
  removeColumn: (id: string) => void;
  resetColumnsName: () => void;
  setColumns: (externalColumns: { name: string }[]) => void;
};

export type ColumnsSlice = ColumnsActions & ColumnsState;

const initialState: ColumnsState = {
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
  resetColumnsName: () => set(initialState),
  setColumns: (externalColumns) => {
    const mappedColumns = get().mappedColumns;
    const updatedMappedColumns = externalColumns.reduce((acc, current, idx) => {
      const key = `col-${idx}`;
      acc[key] = { id: key, value: current.name, error: false };

      return acc;
    }, mappedColumns);
    const updatedColumns = Object.values(updatedMappedColumns);

    set({
      mappedColumns: updatedMappedColumns,
      columns: updatedColumns,
    });
  },
});
