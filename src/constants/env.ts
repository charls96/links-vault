import "jsr:@std/dotenv/load";
import type { EnvVars } from "@types";
import { EnvironmentsVariableError } from "@utils";
import { isEnvironmentVariables } from "@typeguard";

const _getEnvVars = (): EnvVars => {
  const TWITCH_CLIENT_ID = Deno.env.get("TWITCH_CLIENT_ID");
  const TWITCH_CLIENT_SECRET = Deno.env.get("TWITCH_CLIENT_SECRET");

  const envVars: Record<string, string | undefined> = {
    TWITCH_CLIENT_ID,
    TWITCH_CLIENT_SECRET,
  };

  if (!isEnvironmentVariables(envVars))
    throw new EnvironmentsVariableError("Missing environment variables");

  return envVars;
};

const env = _getEnvVars();
export const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = env;
