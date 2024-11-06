import * as TwitchIrc from "twitch_irc";
import type { TwitchOauthToken } from "@types";
import { TWITCH_CLIENT_ID, TWITCH_TOKEN } from "@constants";

export const useTwitch = () => {
  const _getTwitchOauthToken = () => {
    const TWITCH_OAUTH_TOKEN: TwitchOauthToken = `oauth:${TWITCH_TOKEN}`;
    return TWITCH_OAUTH_TOKEN;
  };

  const getTwitchClient = (): TwitchIrc.Client => {
    return new TwitchIrc.Client({
      credentials: { nick: TWITCH_CLIENT_ID, pass: _getTwitchOauthToken() },
    });
  };

  return {
    getTwitchClient
  };
};
