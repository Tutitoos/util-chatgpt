import type { ChatGptModels, ChatGptOptions, ChatGptResponseData } from "../chatgpt";
declare class ChatGpt {
  apiKey: string;
  model: ChatGptModels;
  prompt: string;
  setModel(model: ChatGptModels): void;
  setPrompt(prompt: string): void;
  getCode(): Promise<string>;
  fetchCompletions(options: ChatGptOptions): Promise<ChatGptResponseData>;
}
export default ChatGpt;
