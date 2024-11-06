import * as TwitchIrc from "twitch_irc";
import { assertInstanceOf } from "@std/assert";
import { useTwitch } from "@composables";

Deno.test("Connect to twitch account", () => {
  const client = useTwitch().getTwitchClient();

  assertInstanceOf(client, TwitchIrc.Client);
});