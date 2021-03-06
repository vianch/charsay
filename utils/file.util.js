import fs from "fs";

// Constants
import { AsciiFolder } from "../lib/constants/environment.js";

export const openFile = async (path) => {
	let file = await fs.promises.readFile(path);
	return file.toString();
};

export const getPath = (path) => new URL(`../${path}`, import.meta.url).pathname;

export const getAsciiList = () => {
  try {
    const path = getPath(AsciiFolder);
    const files = fs.readdirSync(path);
   
    if (files === undefined || files?.length === 0) {
			throw Error("Character not found");
		}

    return files;
  } catch(error) {
    throw Error(error);
  }
};

