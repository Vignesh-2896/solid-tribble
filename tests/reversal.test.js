const reverseString = require("../codes/reveral");

test("Test basic reversal", () => {
    expect(reverseString("banana")).toBe("ananab");
});