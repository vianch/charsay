#!/usr/bin/env node
import taketalk from "taketalk";

// Utils
import { getAsciiList, getPath, openFile } from "./utils/file.util.js";
import Logger from "./utils/logger.js";

// Main
import charsay from "./index.js";

const init = (input, options) => {
  charsay(input, options["_"][1], options["_"][2] ?? 12);
};

const help = () => {
  const asciiList = getAsciiList();
  Logger.log(`
    Usage
      $ charsay <string>
      $ charsay <string> <character name>
      $ charsay <string> <character name | optional> <message margin | optional>
      $ echo <string> | charsay
    
    Example
      $ charsay 'Hi this is homer' homer 10
  `);
  Logger.log("\nTry from the following chracters :");
  Logger.print(asciiList);
};

const version = async () => {
      const path = getPath("./package.json");
      const packageData = await openFile(path);
      Logger.log(JSON.parse(packageData)?.version || "0.0.0");
};

taketalk({
  init,
  help,
  version,
});
