export const parseNum = (value: string) => {
  const parsedValue = +value;

  return !isNaN(parsedValue) && parsedValue >= 6 && parsedValue <= 100
    ? parsedValue
    : undefined;
};
