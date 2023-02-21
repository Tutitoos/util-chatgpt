"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
class ChatGpt {
    apiKey = process.env.OPENAI_API_KEY;
    async getCode(prompt) {
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
            model: "text-davinci-003",
            prompt,
        });
        if (!response) {
            throw new Error("There was an error when querying the data");
        }
        return response.choices[0].text.trim();
    }
    async fetchCompletions(options) {
        const response = await (0, node_fetch_1.default)("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify(options),
        });
        const statusCode = response.status;
        const responseBody = (await response.json());
        if (statusCode !== 200) {
            const { message } = responseBody.error;
            if (statusCode >= 500) {
                throw new Error(`OpenAI is currently experiencing problems. Status code: ${statusCode}`);
            }
            throw new Error(`API error: "${message}"`);
        }
        return responseBody;
    }
}
exports.default = ChatGpt;
