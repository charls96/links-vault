import {
  spy,
  assertSpyCalls,
} from "https://deno.land/std@0.150.0/testing/mock.ts";
import { LOGGER_CONTEXT_TEST } from "@constants";
import { logger } from "@utils";
import { assertEquals } from "@std/assert";

Deno.test("LoggerTestContext::Test Logger console error", () => {
  const consoleErrorSpy = spy(console, "error");

  logger.error("Test error message", LOGGER_CONTEXT_TEST);

  assertSpyCalls(consoleErrorSpy, 1);
  assertEquals(
    consoleErrorSpy.calls[0].args[0],
    `Error::${LOGGER_CONTEXT_TEST}::Test error message`
  );

  consoleErrorSpy.restore();
});


Deno.test("LoggerTestContext::Test Logger console error", () => {
  const consoleInfoSpy = spy(console, "info");

  logger.info("Test info message", LOGGER_CONTEXT_TEST);

  assertSpyCalls(consoleInfoSpy, 1);
  assertEquals(
    consoleInfoSpy.calls[0].args[0],
    `Info::${LOGGER_CONTEXT_TEST}::Test info message`
  );

  consoleInfoSpy.restore();
});

Deno.test("LoggerTestContext::Test Logger console warning", () => {
  const consoleWarningSpy = spy(console, "warn");

  logger.warning("Test warning message", LOGGER_CONTEXT_TEST);

  assertSpyCalls(consoleWarningSpy, 1);
  assertEquals(
    consoleWarningSpy.calls[0].args[0],
    `Warning::${LOGGER_CONTEXT_TEST}::Test warning message`
  );

  consoleWarningSpy.restore();
});