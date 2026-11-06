import { describe, expect, it } from "vitest";

import { TerminalInputSchema } from "./messages.js";

describe("terminal colors message", () => {
  it("accepts foreground and background with an optional cursor", () => {
    const message = { type: "colors", foreground: "#111827", background: "#ffffff" };
    const result = TerminalInputSchema.safeParse({
      type: "terminal_input",
      terminalId: "terminal-1",
      message,
    });

    expect(result).toMatchObject({ success: true, data: { message } });
  });
});
