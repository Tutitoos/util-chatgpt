import type { SpinnerModal } from "../types/spinner";
import chalk from "chalk";
import { createSpinner } from "nanospinner";
import type { Spinner as SpinnerClass } from "nanospinner";

class Spinner {
  spinner: SpinnerClass;
  modal: SpinnerModal;

  constructor(text: string) {
    this.spinner = createSpinner();
    this.modal = {
      text,
      color: "green",
      spinnerType: "success",
    };
  }

  clear() {
    this.spinner.clear();
  }

  stop() {
    this.spinner.success();
    console.log();
    this.clear();
  }

  setModal(modal: SpinnerModal) {
    this.modal = modal;

    this.log();
    this.spinner.update();
  }

  start() {
    setTimeout(() => {
      this.spinner.start({
        text: chalk[this.modal.color](this.modal.text),
      });
    }, 1000);
  }

  log() {
    this.spinner[this.modal.spinnerType]({
      text: chalk[this.modal.color](this.modal.text),
    });
  }
}

export default Spinner;
