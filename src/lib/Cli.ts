import { highlight } from "cli-highlight";
import { Command } from "commander";

class Cli {
  prompt: string;
  isError: boolean;

  constructor() {
    this.isError = false;
  }

  start() {
    const { args } = new Command()
      .option("-y, --force", "Run the generated program without asking for confirmation")
      .argument("<prompt...>", "Description of the command to execute")
      .parse(process.argv);

    this.prompt = this.parsePrompt(args);
  }

  stop() {
    process.exit(this.isError ? 0 : 1);
  }

  parsePrompt(args: string[]) {
    return `${args.join(" ")}:\n\`\`\`bash\n#!/bin/bash\n`;
  }

  parseGrid(code: string) {
    const lines = code.split("\n");
    const lineNumbersWidth = lines.length.toString().length;

    const grid: string[] = [];
    for (let index = 0; index < lines.length; ++index) {
      const paddedLineNumber = `${index + 1}`.padStart(lineNumbersWidth, " ");

      grid.push(highlight(`${paddedLineNumber} │ ${lines[index]}`, { language: "typescript" }));
    }

    return grid;
  }
}

export default Cli;
