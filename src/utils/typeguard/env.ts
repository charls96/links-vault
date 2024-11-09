import { EnvVars } from "@types";
import { createTypeGuard } from "@typeguard";

const parserEnvironmentVariables = (value: unknown): EnvVars | undefined => {
  if (
    typeof value === "object" &&
    value &&
    "TWITCH_CLIENT_ID" in value &&
    "TWITCH_CLIENT_SECRET" in value
  ) {
    const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = value;

    if (
      typeof TWITCH_CLIENT_ID === "string" &&
      typeof TWITCH_CLIENT_SECRET === "string"
    )
      return {
        TWITCH_CLIENT_ID,
        TWITCH_CLIENT_SECRET,
      };
  }
};

export const isEnvironmentVariables = createTypeGuard(
  parserEnvironmentVariables
);
