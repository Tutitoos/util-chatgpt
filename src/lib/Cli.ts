import type { ChatGptModels, ChatGptModelsShort } from "../types/chatgpt";
import { highlight } from "cli-highlight";
import { Command } from "commander";

class Cli {
  model: ChatGptModels | null;
  prompt: string;
  isError: boolean;

  constructor() {
    this.isError = false;
  }

  start() {
    const command = new Command()
      .requiredOption("--model <name>", "Type of use model chatgpt: 'davinci', 'curie', 'babbage', 'ada'")
      .argument("<prompt...>", "Description of the command to execute")
      .parse(process.argv);

    const model = command.getOptionValue("model") as ChatGptModelsShort;
    const args = command.processedArgs as string[];

    this.model = this.parseModel(model);
    this.prompt = this.parsePrompt(args);
  }

  stop() {
    process.exit(this.isError ? 0 : 1);
  }

  parseModel(modelChatGpt: ChatGptModelsShort): ChatGptModels | null {
    if (!modelChatGpt) {
      throw new Error("Missing model with chatGpt");
    }

    switch (modelChatGpt) {
      case "ada": {
        return "text-ada-001";
      }

      case "babbage": {
        return "text-babbage-001";
      }

      case "curie": {
        return "text-curie-001";
      }

      case "davinci": {
        return "text-davinci-003";
      }

      default: {
        return null;
      }
    }
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
