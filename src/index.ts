#!/usr/bin/env node

import main from "./main";

main().catch((error: unknown) => {
  const { message } = error as Error;

  console.error(`Error: ${message}`);
});
