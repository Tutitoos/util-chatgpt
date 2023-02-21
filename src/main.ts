import ChatGpt from "./lib/ChatGpt";
import Cli from "./lib/Cli";
import Spinner from "./lib/Spinner";

const main = async () => {
  const spinner = new Spinner("Analyzing your question...");
  spinner.start();

  const cli = new Cli();
  try {
    const chatGpt = new ChatGpt();
    cli.start();

    const code = await chatGpt.getCode(cli.prompt);
    spinner.stop();

    console.log(cli.parseGrid(code).join("\n"));
    process.exit();
  } catch (error: unknown) {
    const { message } = error as Error;

    cli.isError = true;
    spinner.setModal({
      text: message,
      color: "red",
      spinnerType: "error",
    });
  } finally {
    cli.stop();
  }
};

export default main;
