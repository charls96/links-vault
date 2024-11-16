export const getQueryParams = (
  array: string[],
  parameterName: string
): string => {
  return array.reduce((acc, value, index) => {
    return `${acc}${index === 0 ? "?" : "&"}${parameterName}=${value}`;
  }, "");
};
