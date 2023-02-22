#!/usr/bin/env node
import type { ChatGptModelsShort } from "./chatgpt";
declare const main: ({ model, prompt }: { model?: ChatGptModelsShort | undefined; prompt: string }) => Promise<string>;
export default main;
