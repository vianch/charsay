import path from "path";
import fs from "fs";

export const openFile = async (path) => {
	let file = await fs.promises.readFile(path);
	return file.toString();
};


export const getAsciiList = () => {
  try {
    const files = fs.readdirSync('./ASCII/');
   
    if (files === undefined || files?.length === 0) {
			throw Error("Character not found");
		}

    return files;
  } catch(error) {
    throw Error(error);
  }
};

