#!/usr/bin/env node
import taketalk from "taketalk";

// Utils
import { getAsciiList, openFile } from "./utils/file.util.js";
import Logger from "./utils/logger.js";

// Main
import charsay from "./index.js";

const init = (input, options) => {
  charsay(input, options["_"][1]);
};

const help = () => {
  const asciiList = getAsciiList();
  Logger.log(`
    Usage
      $ charsay <string>
      $ charsay <string> <character name>
      $ echo <string> | charsay
    
    Example
      $ charsay 'Hi this is homer' homer
  `);
  Logger.log("\nTry from the following chracters :");
  Logger.print(asciiList);
};

const version = async () => {
      const packageData = await openFile("./package.json");
      Logger.log(JSON.parse(packageData)?.version || "0.0.0");
};

taketalk({
  init,
  help,
  version,
});
