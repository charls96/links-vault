type Parser<T> = (value: unknown) => T | undefined;

export const createTypeGuard =
  <T>(parse: Parser<T>) =>
  (value: unknown): value is T =>
    parse(value) !== undefined;
