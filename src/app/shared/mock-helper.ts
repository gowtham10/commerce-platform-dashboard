import { MockFileNames } from "@/constants";
import { promises as fs } from "fs";

const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

// Comparators

const revenueComparator = (a: any, b: any) =>
  parseInt(a.totalRevenue ? a?.totalRevenue.slice(1) : a?.totalSpend.slice(1)) -
  parseInt(b.totalRevenue ? b?.totalRevenue.slice(1) : b?.totalSpend.slice(1));

const orderComparator = (a: any, b: any) =>
  a?.totalProductsSold - b?.totalProductsSold;

const chooseComparator = (key: string) => {
  switch (key) {
    case "revenue":
      return revenueComparator;
    case "orders":
      return orderComparator;
    default:
      return (a: any, b: any) => 0;
  }
};

// Private function

const constructComparisonTextFromDays = (noOfDays: number): string => {
  if (noOfDays <= 6) return `(same day${noOfDays > 0 ? "s" : ""} last week)`;

  return `(last ${noOfDays + 1} days from start date)`;
};

const getComparisonText = (startDate: Date, endDate: Date): string => {
  const diffTime = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime(),
  );

  const numberOfDays = Math.ceil(diffTime / MILLIS_IN_A_DAY);

  return constructComparisonTextFromDays(numberOfDays);
};

const closestWholeNumber = (target: number): number =>
  target + (50 - (target % 50 || 50));

const extractValue = (item: any, key: string | number) =>
  typeof key === "number" ? key : item[key];

const getRandomValueFromOptions = (
  item: any,
  options: any,
): number | string => {
  const randomNumber = getRandomInt(
    options?.min,
    extractValue(item, options?.max),
  );
  const wholeNumber = closestWholeNumber(randomNumber);
  if (options?.suffix || options?.prefix) {
    return `${options?.prefix || ""}${wholeNumber}${options?.suffix || ""}`;
  }
  return wholeNumber;
};

const updateMockItem = (item: any, mockMeta: any[]) => {
  mockMeta.forEach((meta: any) => {
    item[meta?.key] = getRandomValueFromOptions(item, meta?.options);
  });
};

const constructMockData = async (type: string, filters: any) => {
  const mockTemplate = await readJsonFile(
    MockFileNames[type as keyof typeof MockFileNames],
  ) as any;

  const { mock, ...rest } = mockTemplate;
  const data = mockTemplate[mock?.dataKey] || mockTemplate?.data;
  if (
    Array.isArray(mock?.metaData) && mock?.metaData.length > 0
  ) {
    data.forEach((item: any) => updateMockItem(item, mock?.metaData));
  }

  if (mock?.sort) {
    data.sort(chooseComparator(mock?.sort?.key));
    if (mock?.sort?.order === "desc") data.reverse();
  }


  return {
    ...rest,
    data: handleFilters(data, filters),
  };
};

const simpleHash = (obj: any) => Object.values(obj).join("|");

const formatDate = (dateStr: string) => {
  if (dateStr === "date") return dateStr;
  const date = new Date(dateStr);
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
};

const memoize = (
  fn: (mockType: string, filters: any) => void,
  page: string,
) => {
  const cache = new Map();
  const cached = async function (
    this: any,
    mockType: string,
    filters: any,
  ) {
    const { startDate = "date", endDate = "date", ...rest } = filters || {};
    const key = simpleHash({
      mockType,
      page,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      ...rest,
    });
    if (!cache.has(key)) {
      const result = fn.call(this, mockType, filters);
      cache.set(key, result);
    }

    return await cache.get(key);
  };
  cached.cache = cache;
  return cached;
};

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
    console.log("err", err);
    return data;
  }
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const constructSalesMockData = memoize(constructMockData, "sales");
export const constructProductsMockData = memoize(constructMockData, "products");
export const constructCustomerMockData = memoize(
  constructMockData,
  "customers",
);
export const constructDashboardMockData = memoize(
  constructMockData,
  "dashboard",
);
