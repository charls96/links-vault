import { useTwitch } from "@composables";

const twitch = useTwitch();

const client = twitch.getTwitchClient();

console.log(client);
