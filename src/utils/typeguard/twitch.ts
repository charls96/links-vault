import { createTypeGuard } from "@typeguard";
import type { AUTH_TOKEN_RESPONSE } from "@types";

const parserAuthTokenResponse = (
  value: unknown
): AUTH_TOKEN_RESPONSE | undefined => {
  if (
    typeof value === "object" &&
    value &&
    "access_token" in value &&
    "expires_in" in value &&
    "token_type" in value
  ) {
    const { access_token, expires_in, token_type } = value;

    if (
      typeof access_token === "string" &&
      typeof expires_in === "number" &&
      typeof token_type === "string"
    )
      return {
        access_token,
        expires_in,
        token_type,
      };
  }
};

export const isAuthTokenResponse = createTypeGuard(
    parserAuthTokenResponse
);
