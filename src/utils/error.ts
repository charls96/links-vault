import { AppContext } from "@types";

const createErrorClass = function (context: AppContext) {
  return class CustomError extends Error {
    constructor(message: string) {
      super(`${context}::${message}`);
      this.name = name;
    }
  };
};

export const EnvironmentsVariableError = createErrorClass(
  AppContext.ENVIRONMENT_VARIABLES
);
export const TwitchServiceError = createErrorClass(
  AppContext.TWITCH_SERVICE
);
