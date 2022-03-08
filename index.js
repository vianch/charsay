import boxen from "boxen";

// Constants
import { AsciiFolder } from "./lib/constants/environment.js";

// Utils
import Logger from "./utils/logger.js";
import { getAsciiList, getPath, openFile } from "./utils/file.util.js";

function printMessage (message, character, margin = 12) {
  Logger.print(boxen(message, {
    padding: 0.7,
    margin: { left: margin },
    borderStyle: "round",
  }));
  Logger.print(" ".repeat(margin - 1) + "/");
  Logger.print(character);
}

const charsay = async (message, ascii = "homer", margin = 12) => {
  try {
    if(!message) {
      throw Error("No message provided");
    }

    const asciiList = getAsciiList();
    const path = getPath(`${AsciiFolder}${ascii}`);
    const asciiCharacter = await openFile(path);
    const existAscii = asciiList.indexOf(ascii)

    if(!asciiList){
      throw Error("No ASCII files");
    }

    if(!ascii || !existAscii) {
      throw Error("Character not found");
    }

    printMessage(message, asciiCharacter, margin);
  } catch(error) {
    Logger.error("Something went wrong\n", error);
  }

};

export default charsay;
