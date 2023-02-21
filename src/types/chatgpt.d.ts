export type ChatGptModels = "text-davinci-003" | "text-curie-001" | "text-babbage-001" | "text-ada-001";
export type ChatGptModelsShort = "davinci" | "curie" | "babbage" | "ada";

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
