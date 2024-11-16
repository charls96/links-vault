import {
  AUTH_GRANT_TYPE,
  POST,
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET,
  URL_ENCODED_CONTENT_TYPE,
} from "@constants";
import { TwitchServiceError } from "@utils";
import { isAuthTokenResponse } from "@typeguard";
import type { TwitchAuthResponseToken } from "@types";
import { capitalize } from "@helpers";

export const TwitchAuthService = new (class {
  readonly #twitchBaseURL = "https://id.twitch.tv";
  readonly #urls: Record<string, string> = {
    auth: `${this.#twitchBaseURL}/oauth2/token`,
  };

  private async getTwitchToken(): Promise<TwitchAuthResponseToken> {
    try {
      const response = await fetch(this.#urls.auth, {
        method: POST,
        headers: {
          "Content-Type": URL_ENCODED_CONTENT_TYPE,
        },
        body: new URLSearchParams({
          client_id: TWITCH_CLIENT_ID,
          client_secret: TWITCH_CLIENT_SECRET,
          grant_type: AUTH_GRANT_TYPE,
        }).toString(),
      });

      if (!response.ok)
        throw new TwitchServiceError(
          `Failed to fetch token: ${response.statusText}`
        );

      const authResponseData = await response.json();

      if (!isAuthTokenResponse(authResponseData))
        throw new TwitchServiceError(
          `Failed to fetch token, The response does not meet the interface: AUTH_TOKEN_RESPONSE`
        );

      return authResponseData;
    } catch (error) {
      throw new TwitchServiceError(`Failed to fetch token: ${error}`);
    }
  }

  async getTwitchAuthToken(): Promise<string> {
    const tokenData = await this.getTwitchToken();
    const tokenType = capitalize(tokenData.token_type);

    return `${tokenType} ${tokenData.access_token}`;
  }
})();
