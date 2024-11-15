import { assertEquals } from "@std/assert";
import { beforeAll } from "jsr:@std/testing/bdd";
import { setupApp } from "@utils";
import services from "@services";
import TwitchAuthService from "../services/twitchAuth.ts";

//TODO research how to do a proper global setup for the tests, it seems that is detected as a global setup but the variables are not shared across the test files
beforeAll(async () => {
  await setupApp();
});

Deno.test("SetupServices::Test setup services", () => {
  assertEquals(services.twitchAuth instanceof TwitchAuthService, true);
});

Deno.test("TwitchService::Test twitch token", () => {
  const twitchToken = services.twitchAuth.getTwitchAuthToken();

  assertEquals(typeof twitchToken, "string");
});
