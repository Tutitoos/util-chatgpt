import type { ChatGptModels, ChatGptOptions, ChatGptResponse, ChatGptResponseData, ChatGptResponseError } from "../types/chatgpt";
import axios from "axios";

class ChatGpt {
  apiKey: string = process.env.OPENAI_API_KEY!;
  model: ChatGptModels;
  prompt: string;

  setModel(model: ChatGptModels) {
    this.model = model;
  }

  setPrompt(prompt: string) {
    this.prompt = prompt;
  }

  async getCode() {
    const response = await this.fetchCompletions({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      top_p: 1,
      stop: "```",
      temperature: 0,
      suffix: "\n```",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      max_tokens: 1000,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      presence_penalty: 0,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      frequency_penalty: 0,
      model: this.model,
      prompt: this.prompt,
    });

    if (!response) {
      throw new Error("There was an error when querying the data");
    }

    return response.choices[0].text.trim();
  }

  async fetchCompletions(options: ChatGptOptions) {
    const response = await axios.post<ChatGptResponse>("https://api.openai.com/v1/completions", options, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${this.apiKey}`,
      },
    });

    const statusCode = response.status;
    const responseBody = response.data;

    if (statusCode !== 200) {
      const { message } = (responseBody as ChatGptResponseError).error;

      if (statusCode >= 500) {
        throw new Error(`OpenAI is currently experiencing problems. Status code: ${statusCode}`);
      }

      throw new Error(`API error: "${message}"`);
    }

    return responseBody as ChatGptResponseData;
  }
}

export default ChatGpt;
