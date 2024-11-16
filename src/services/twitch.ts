import { isTwitchUserResponse } from "@typeguard";
import { TWITCH_CLIENT_ID } from "@constants";
import { TwitchServiceError } from "@utils";
import { Session } from "@models";
import { getQueryParams } from "@helpers";
import type { TwitchUser } from "@types";

export const TwitchService = new (class {
  readonly #twitchBaseURL = "https://api.twitch.tv";
  readonly #urls: Record<string, string> = {
    users: `${this.#twitchBaseURL}/helix/users`,
  };

  async getUsers(usernames: string[]): Promise<TwitchUser[]> {
    const queryParamsUsers = getQueryParams(usernames, "login");
    try {
      const response = await fetch(`${this.#urls.users}${queryParamsUsers}`, {
        headers: {
          Authorization: Session.twitchToken,
          "Client-Id": TWITCH_CLIENT_ID,
        },
      });

      if (!response.ok) {
        throw new TwitchServiceError(
          `Failed to fetch the user ids with usernames: ${usernames} status: ${response.status}`
        );
      }

      const responseData = await response.json();

      if (!isTwitchUserResponse(responseData))
        throw new TwitchServiceError(
          `Failed to fetch the user ids with usernames: ${usernames} response does not meet the interface: TwitchUserResponse`
        );

      return responseData.data;
    } catch (error) {
      throw new TwitchServiceError(
        `Failed to fetch the user ids with usernames: ${usernames} error: ${error}`
      );
    }
  }
})();
