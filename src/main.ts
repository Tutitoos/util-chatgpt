import ChatGpt from "./lib/ChatGpt";
import Cli from "./lib/Cli";
import type { ChatGptModelsShort } from "./types/chatgpt";

const main = async ({ model, prompt }: { model?: ChatGptModelsShort; prompt: string[] }) => {
  try {
    const cli = new Cli();
    const chatGpt = new ChatGpt();

    chatGpt.setModel(cli.parseModel(model ?? "davinci"));
    chatGpt.setPrompt(cli.parsePrompt(prompt));
    const code = await chatGpt.getCode();

    return cli.parseGrid(code).join("\n");
  } catch (error: unknown) {
    const { message } = error as Error;

    throw new Error(`Error: ${message}`);
  }
};

export default main;
