const capitalizeString = require("../codes/capitalize");

test("Check Capitalization of amEriCa",() => {
    expect(capitalizeString("amEriCa")).toBe("America");
});

test("Check Capitalization of Rainbow",() => {
    expect(capitalizeString("Rainbow")).toBe("Rainbow");
});