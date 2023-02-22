import type { ChatGptModels, ChatGptModelsShort } from "../chatgpt";
declare class Cli {
  model: ChatGptModels;
  prompt: string;
  isError: boolean;
  constructor();
  start(): void;
  stop(): void;
  parseModel(modelChatGpt: ChatGptModelsShort): ChatGptModels;
  parsePrompt(args: string[]): string;
  parseGrid(code: string): string[];
}
export default Cli;
