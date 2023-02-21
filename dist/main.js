"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChatGpt_1 = __importDefault(require("./lib/ChatGpt"));
const Cli_1 = __importDefault(require("./lib/Cli"));
const Spinner_1 = __importDefault(require("./lib/Spinner"));
const main = async () => {
    const spinner = new Spinner_1.default("Analize your quest...");
    spinner.start();
    const cli = new Cli_1.default();
    try {
        const chatGpt = new ChatGpt_1.default();
        cli.start();
        const code = await chatGpt.getCode(cli.prompt);
        spinner.stop();
        console.log(cli.parseGrid(code));
    }
    catch (error) {
        const { message } = error;
        cli.isError = true;
        spinner.setModal({
            text: message,
            color: "red",
            spinnerType: "error",
        });
    }
    finally {
        cli.stop();
    }
};
exports.default = main;
