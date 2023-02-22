const utilChatGpt = require("util-chatgpt").default;

const test = async () => {
  const testResult = await utilChatGpt({
    prompt: ["How to install npm in windows?"],
  });

  console.log("TestResult", testResult);
};

test();
