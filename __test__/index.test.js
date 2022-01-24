const { camelToCapital } = require("../index");

test("Test: camelToCapital: for small camelCase", () => {
	expect(camelToCapital("isAnString")).toBe("Is An String");
});

test("Test: camelToCapital: for capital camelCase", () => {
	expect(camelToCapital("IsAnString")).toBe("Is An String");
});
