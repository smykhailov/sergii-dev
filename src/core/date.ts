export const formatDate: (date: Date | string) => string = (
  date: Date | string
) => {
  const dateToFormat = date instanceof Date ? date : new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

  if (new Date().getFullYear() > dateToFormat.getFullYear()) {
    options.year = "numeric";
  }

  return Intl.DateTimeFormat("en-US", options).format(dateToFormat);
};
