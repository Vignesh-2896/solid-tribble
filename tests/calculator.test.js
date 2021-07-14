const calculator = require("../codes/calculator");

test("Sum of 2 numbers", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("Subtract 2 numbers",() => {
    expect(calculator.sub(3,2)).toBe(1);
});

test("Multiply 2 numbers",() => {
    expect(calculator.mul(2,3)).toBe(6);
});

test("Divide 2 numbers",() => {
    expect(calculator.div(6,3)).toBe(2);
});

test("Mod of 2 numbers",() => {
    expect(calculator.mod(17,13)).toBe(4);
});