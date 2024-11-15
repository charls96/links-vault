import { TWITCH_CLIENT_ID } from "@constants";
import services from "@services";
import { TwitchServiceError } from "@utils";

export default class TwitchService {
  readonly #twitchBaseURL = "https://id.twitch.tv";
  readonly #urls: Record<string, string> = {
    users: `${this.#twitchBaseURL}/helix/users`,
  };

  private authToken = services.twitchAuth.getTwitchAuthToken();

  private async getUserId(username: string): Promise<string | undefined> {
    try {
      const response = await fetch(`${this.#urls.users}?login=${username}`, {
        headers: {
          Authorization: this.authToken,
          "Client-Id": TWITCH_CLIENT_ID,
        },
      });

      if (!response.ok) {
        throw new TwitchServiceError(
          `Failed to fetch the user id with username: ${username} status: ${response.status}`
        );
      }

      const data = await response.json();
      return data.data[0]?.id;
    } catch (error) {
      throw new TwitchServiceError(
        `Failed to fetch the user id with username: ${username} error: ${error}`
      );
    }
  }
}
