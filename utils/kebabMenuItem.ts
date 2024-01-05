import { ModalTriggerType } from "@/state/useModalStore";

export class KebabMenuItem {
  public modalTrigger: ModalTriggerType;

  constructor(
    public label: string,
    public isDelete: boolean = false,
  ) {
    this.modalTrigger = label.replace(/\s+/g, "-");
  }
}
