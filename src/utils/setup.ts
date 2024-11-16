import { Session } from "@models";

export const setupApp = async () => {
  await Session.init();
};
