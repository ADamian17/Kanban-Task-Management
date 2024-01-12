import { create } from "zustand";

import DeleteTask from "@/components/ModalsContent/DeleteTask";
import EditBoard from "@/components/ModalsContent/EditBoard";
import EditTask from "@/components/ModalsContent/EditTask";
import SelectBoard from "@/components/ModalsContent/SelectBoard";
import ViewTask from "@/components/ModalsContent/ViewTask";

type UseModalState = {
  modals: Record<string, React.FC>;
  modalTrigger: ModalTriggerType;
};

type UseModalActions = {
  openModal: (modalTrigger: ModalTriggerType) => void;
  closeModal: () => void;
};

export type ModalTriggerType =
  | keyof typeof modalsInitialState
  | (string & {})
  | null;

const modalsInitialState = {
  "delete-task": DeleteTask,
  "edit-board": EditBoard,
  "edit-task": EditTask,
  "select-board": SelectBoard,
  "view-task": ViewTask,
};

const useModalStore = create<UseModalState & UseModalActions>((set) => ({
  modals: { ...modalsInitialState },
  modalTrigger: null,
  openModal: (modalTrigger) => set({ modalTrigger }),
  closeModal: () => set({ modalTrigger: null }),
}));

export default useModalStore;
