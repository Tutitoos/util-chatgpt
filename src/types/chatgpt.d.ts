export type ChatGptModels = "text-davinci-003";

export interface ChatGptOptions {
  top_p: number;
  stop: string;
  temperature: number;
  suffix: string;
  max_tokens: number;
  presence_penalty: number;
  frequency_penalty: number;
  model: ChatGptModels;
  prompt: string;
}

export interface ChatGptResponseData {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChatGptChoices[];
  usage: ChatGptUsage;
}

export interface ChatGptResponseError {
  error: {
    message: string;
  };
}

export type ChatGptResponse = ChatGptResponseData | ChatGptResponseError;

export interface ChatGptChoices {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

export interface ChatGptUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
