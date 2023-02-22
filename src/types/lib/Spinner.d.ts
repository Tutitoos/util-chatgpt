import type { SpinnerModal } from "../spinner";
import type { Spinner as SpinnerClass } from "nanospinner";
declare class Spinner {
  spinner: SpinnerClass;
  modal: SpinnerModal;
  constructor(text: string);
  clear(): void;
  stop(): void;
  setModal(modal: SpinnerModal): void;
  start(): void;
  log(): void;
}
export default Spinner;
