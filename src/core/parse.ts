import { defaultConfig, TConfig } from "./config";

export const parseNum = (value: string, htmlElementName: keyof TConfig) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    return defaultConfig[htmlElementName];
  } else {
    return parsedValue;
  }
};
