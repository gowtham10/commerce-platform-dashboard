"use client";
export const getItem = (key: string) => {
  if (typeof window === "undefined") return;
  return localStorage.getItem(key);
};

export const setItem = (key: string, value: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
}

export const filterSelectedOptions = (allOptions: any[], selectedOptions: string[]) => allOptions.filter(option => selectedOptions.includes(option?.value));

export const getSelectedValues = (selectedOptionsFromServer: string[] = [], localaStorageKey: string) => {
  const selectedOptions = getItem(localaStorageKey);
  let actualSelectedOptions = selectedOptionsFromServer;

  if (selectedOptions) {
    actualSelectedOptions = (selectedOptions as string)?.split(",");
  }

  return actualSelectedOptions;
}
