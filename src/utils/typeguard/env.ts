import { EnvVars } from "@types";
import { createTypeGuard } from "@typeguard";

const parserEnvironmentVariables = (value: unknown): EnvVars | undefined => {
  if (
    typeof value === "object" &&
    value &&
    "TWITCH_CLIENT_ID" in value &&
    "TWITCH_CLIENT_SECRET" in value &&
    "TWITCH_USERNAMES" in value
  ) {
    const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET, TWITCH_USERNAMES } = value;

    if (
      typeof TWITCH_CLIENT_ID === "string" &&
      typeof TWITCH_CLIENT_SECRET === "string" &&
      typeof TWITCH_USERNAMES === "string"
    )
      return {
        TWITCH_CLIENT_ID,
        TWITCH_CLIENT_SECRET,
        TWITCH_USERNAMES,
      };
  }
};

export const isEnvironmentVariables = createTypeGuard(
  parserEnvironmentVariables
);
