const arrFunc = require("../codes/arrayAnalysis")

test("Check returned object",() => {
    expect(arrFunc([25,100,37,125,2]).min).toBe(2);
    expect(arrFunc([25,100,37,125,2]).max).toBe(125);
    expect(arrFunc([25,100,37,125,2]).length).toBe(5);
    expect(arrFunc([25,100,37,125,2]).average).toBe(57.8);
})