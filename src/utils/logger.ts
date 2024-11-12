import type { AppContext } from "@types";

export const logger = new (class {
  error(message: string, context: AppContext) {
    console.error(`Error::${context}::${message}`);
  }

  info(message: string, context: AppContext) {
    console.info(`Info::${context}::${message}`);
  }

  warning(message: string, context: AppContext) {
    console.warn(`Warning::${context}::${message}`);
  }
})();
