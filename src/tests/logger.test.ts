import { spy, assertSpyCalls } from "jsr:@std/testing/mock";
import { logger } from "@utils";
import { assertEquals } from "@std/assert";
import { AppContext } from "@types";

Deno.test("LoggerTestContext::Test Logger console error", () => {
  const consoleErrorSpy = spy(console, "error");

  logger.error("Test error message", AppContext.TEST);

  assertSpyCalls(consoleErrorSpy, 1);
  assertEquals(
    consoleErrorSpy.calls[0].args[0],
    `Error::${AppContext.TEST}::Test error message`
  );

  consoleErrorSpy.restore();
});

Deno.test("LoggerTestContext::Test Logger console error", () => {
  const consoleInfoSpy = spy(console, "info");

  logger.info("Test info message", AppContext.TEST);

  assertSpyCalls(consoleInfoSpy, 1);
  assertEquals(
    consoleInfoSpy.calls[0].args[0],
    `Info::${AppContext.TEST}::Test info message`
  );

  consoleInfoSpy.restore();
});

Deno.test("LoggerTestContext::Test Logger console warning", () => {
  const consoleWarningSpy = spy(console, "warn");

  logger.warning("Test warning message", AppContext.TEST);

  assertSpyCalls(consoleWarningSpy, 1);
  assertEquals(
    consoleWarningSpy.calls[0].args[0],
    `Warning::${AppContext.TEST}::Test warning message`
  );

  consoleWarningSpy.restore();
});
