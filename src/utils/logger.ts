import type { LoggerContext } from "@types";

export const logger = new (class {
  error(message: string, context: LoggerContext) {
    console.error(`Error::${context}::${message}`);
  }

  info(message: string, context: LoggerContext) {
    console.info(`Info::${context}::${message}`);
  }

  warning(message: string, context: LoggerContext) {
    console.warn(`Warning::${context}::${message}`);
  }
})();
