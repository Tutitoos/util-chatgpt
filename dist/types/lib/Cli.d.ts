declare class Cli {
    prompt: string;
    isError: boolean;
    constructor();
    start(): void;
    stop(): void;
    parsePrompt(args: string[]): string;
    parseGrid(code: string): string[];
}
export default Cli;
