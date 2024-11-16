import { createTypeGuard } from "@typeguard";
import type { TwitchAuthResponseToken, TwitchUserResponse } from "@types";

const parserAuthTokenResponse = (
  value: unknown
): TwitchAuthResponseToken | undefined => {
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

const parserTwitchUserResponse = (
  value: unknown
): TwitchUserResponse | undefined => {
  if (typeof value === "object" && value && "data" in value) {
    const { data } = value;

    if (Array.isArray(data)) {
      const isValidUserArray = data.every(
        (user) =>
          typeof user === "object" &&
          user !== null &&
          "id" in user &&
          "login" in user &&
          "display_name" in user &&
          "type" in user &&
          "broadcaster_type" in user &&
          "description" in user &&
          "profile_image_url" in user &&
          "offline_image_url" in user &&
          "view_count" in user &&
          typeof user.id === "string" &&
          typeof user.login === "string" &&
          typeof user.display_name === "string" &&
          typeof user.type === "string" &&
          typeof user.broadcaster_type === "string" &&
          typeof user.description === "string" &&
          typeof user.profile_image_url === "string" &&
          typeof user.offline_image_url === "string" &&
          typeof user.view_count === "number"
      );

      if (isValidUserArray) {
        return {
          data: data,
        };
      }
    }
  }

  return undefined;
};

export const isAuthTokenResponse = createTypeGuard(parserAuthTokenResponse);
export const isTwitchUserResponse = createTypeGuard(parserTwitchUserResponse);
