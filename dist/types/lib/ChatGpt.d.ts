import type { ChatGptOptions, ChatGptResponseData } from "../types/chatgpt";
declare class ChatGpt {
    apiKey: string;
    getCode(prompt: string): Promise<string>;
    fetchCompletions(options: ChatGptOptions): Promise<ChatGptResponseData>;
}
export default ChatGpt;
