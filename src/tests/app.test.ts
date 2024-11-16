import { assertEquals } from "@std/assert";
import { beforeAll } from "jsr:@std/testing/bdd";
import { setupApp } from "@utils";
import { Session } from "@models";
import { TwitchController } from "@controllers";

//TODO research how to do a proper global setup for the tests, it seems that is detected as a global setup but the variables are not shared across the test files
beforeAll(async () => {
  await setupApp();
});

Deno.test("Session::Test session class", () => {
  assertEquals(typeof Session.twitchToken, "string");
  assertEquals(Session.twitchToken.includes("Bearer "), true);
});

//Twitch tests
Deno.test("TwitchController::Get user ids", async (t) => {
  await t.step("correctly formats valid username string", () => {
    const expected = ["midudev", "theo"];
    const result = TwitchController.getUserNames();
    assertEquals(result, expected);
  });

  const usersIds = await TwitchController.getUserIds();

  assertEquals(usersIds.length, 2);
  assertEquals(usersIds[0] !== "", true);
  assertEquals(usersIds[1] !== "", true);
});
