import { ModalTriggerType } from "@/state/useModalStore";

export class KebabMenuItem {
  constructor(
    public label: string,
    public uri: string,
    public isDelete: boolean = false,
  ) {}
}
