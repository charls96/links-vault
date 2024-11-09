import "jsr:@std/dotenv/load";
import { assertEquals } from "https://deno.land/std@0.150.0/testing/asserts.ts";
import { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } from "@constants";

Deno.test(
  "EnvironmentVariables::Successfully loads environment variables",
  () => {
    assertEquals(typeof TWITCH_CLIENT_ID, "string");
    assertEquals(typeof TWITCH_CLIENT_SECRET, "string");
  }
);
