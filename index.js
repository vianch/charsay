import boxen from "boxen";

import Logger from "./utils/logger.js";
import { getAsciiList, openFile } from "./utils/file.util.js";


function printMessage (message, character, margin = 15) {
  Logger.print(  boxen(message, {
    padding: 0.7,
    margin: { left: margin },
    borderStyle: "round",
  }));
  Logger.print(" ".repeat(margin- 1) + "/");
  Logger.print(character);
}

const charsay = async (message, ascii = "homer") => {
  try {
    if(!message) {
      throw Error("No message provided");
    }

    const asciiList = getAsciiList();
    const asciiCharacter = await openFile(`./ASCII/${ascii}`);
    const existAscii = asciiList.indexOf(ascii)

    if(!asciiList){
      throw Error("No ASCII files");
    }

    if(!ascii || !existAscii) {
      throw Error("Character not found");
    }

    printMessage(message, asciiCharacter);
  } catch(error) {
    Logger.error("Something went wrong\n", error);
  }

};

export default charsay;
