import type { LoggerContext } from "@types";
import { LOGGER_CONTEXT_ENVIRONMENT_VARIABLES } from "../constants/logger.ts";

const createErrorClass = function (context: LoggerContext) {
  return class CustomError extends Error {
    constructor(message: string) {
      super(`${context}::${message}`);
      this.name = name;
    }
  };
};

export const EnvironmentsVariableError = createErrorClass(
  LOGGER_CONTEXT_ENVIRONMENT_VARIABLES
);
