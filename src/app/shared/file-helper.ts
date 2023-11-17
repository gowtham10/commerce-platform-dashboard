import { promises as fs } from 'fs';

export async function readJsonFile(fileName: string) {
  const file = await fs.readFile(process.cwd() + `/mocks/${fileName}.json`, 'utf8');
  let data = {};

  try {
    data = JSON.parse(file);
  }catch(error: any) {
    // TODO: Send logs to a logging service
    console.log("error", error);
    data = {};
  }

  return data;
}
