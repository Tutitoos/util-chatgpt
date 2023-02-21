"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_highlight_1 = require("cli-highlight");
const commander_1 = require("commander");
class Cli {
    prompt;
    isError;
    constructor() {
        this.isError = false;
    }
    start() {
        const { args } = new commander_1.Command()
            .option("-y, --force", "Run the generated program without asking for confirmation")
            .argument("<prompt...>", "Description of the command to execute")
            .parse(process.argv);
        this.prompt = this.parsePrompt(args);
    }
    stop() {
        process.exit(this.isError ? 0 : 1);
    }
    parsePrompt(args) {
        return `${args.join(" ")}:\n\`\`\`bash\n#!/bin/bash\n`;
    }
    parseGrid(code) {
        const lines = code.split("\n");
        const lineNumbersWidth = lines.length.toString().length;
        const grid = [];
        for (let index = 0; index < lines.length; ++index) {
            const paddedLineNumber = `${index + 1}`.padStart(lineNumbersWidth, " ");
            grid.push((0, cli_highlight_1.highlight)(`${paddedLineNumber} │ ${lines[index]}`, { language: "typescript" }));
        }
        return grid;
    }
}
exports.default = Cli;
