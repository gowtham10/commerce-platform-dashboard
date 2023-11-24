import { MockFileNames } from "@/constants";
import { promises as fs } from "fs";

const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

export async function readJsonFile(fileName: string) {
  const file = await fs.readFile(
    process.cwd() + `/mocks/${fileName}.json`,
    "utf8",
  );
  let data = {};

  try {
    data = JSON.parse(file);
  } catch (error: any) {
    // TODO: Send logs to a logging service
    console.log("error", error);
    data = {};
  }

  return data;
}

function constructComparisonTextFromDays(noOfDays: number): string {
  if (noOfDays <= 6) return `(same day${noOfDays > 0 ? "s" : ""} last week)`;

  return `(last ${noOfDays + 1} days from start date)`;
}

function getComparisonText(startDate: Date, endDate: Date): string {
  const diffTime = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime(),
  );

  const numberOfDays = Math.ceil(diffTime / MILLIS_IN_A_DAY);

  return constructComparisonTextFromDays(numberOfDays);
}

export function handleFilters(data: any, filters: any) {
  if (
    !filters || typeof filters !== "object" ||
    Object.keys(filters).length === 0 || !filters?.startDate ||
    !filters?.endDate
  ) return data;

  try {
    const stringifiedData = JSON.stringify(data);
    const comparisonText = getComparisonText(
      filters?.startDate,
      filters?.endDate,
    );
    const modifiedData = stringifiedData.replace(
      /{{comparisonText}}/g,
      comparisonText,
    );
    return JSON.parse(modifiedData);
  } catch (err) {
    return data;
  }
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function valueHandler(options: any) {
  const randomNumber = getRandomInt(options?.min, options?.max);
  return randomNumber;
}

function updateMockItem(item: any, mockMeta: any[]) {
  mockMeta.map((meta: any) => {
    item[meta?.key] = valueHandler(meta?.options);
  });
}

export function constructMockData(templateMock: any, filters: any) {
  const { data, mock, ...rest } = templateMock;
  if (
    Array.isArray(mock?.metaData) && mock?.metaData.length > 0 &&
    Array.isArray(data) && data.length > 0
  ) {
    data.map((item) => updateMockItem(item, mock?.metaData));
  }

  return {
    data: handleFilters(data, filters),
    ...rest,
  };
}
