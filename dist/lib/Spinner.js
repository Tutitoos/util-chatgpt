"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const nanospinner_1 = require("nanospinner");
class Spinner {
    spinner;
    modal;
    constructor(text) {
        this.spinner = (0, nanospinner_1.createSpinner)();
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
    setModal(modal) {
        this.modal = modal;
        this.log();
        this.spinner.update();
    }
    start() {
        setTimeout(() => {
            this.spinner.start({
                text: chalk_1.default[this.modal.color](this.modal.text),
            });
        }, 1000);
    }
    log() {
        this.spinner[this.modal.spinnerType]({
            text: chalk_1.default[this.modal.color](this.modal.text),
        });
    }
}
exports.default = Spinner;
