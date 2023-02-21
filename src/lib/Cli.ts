import type { ChatGptModels } from "../types/chatgpt";
import { highlight } from "cli-highlight";
import { Command } from "commander";

class Cli {
  modelChatGpt: ChatGptModels;
  prompt: string;
  isError: boolean;

  constructor() {
    this.isError = false;
  }

  start() {
    const command = new Command()
      .requiredOption("--model <name>", "Type of use model chatgpt: 'text-davinci-003'")
      .argument("<prompt...>", "Description of the command to execute")
      .parse(process.argv);

    const model = command.getOptionValue("model") as ChatGptModels;
    const args = command.processedArgs as string[];

    this.modelChatGpt = model;
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
