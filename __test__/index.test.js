const {
	camelToCapital,
	camelToConstant,
	camelToKebab,
	camelToPascal,
	camelToSnake,
	capitalToCamel,
	capitalToConstant,
	capitalToKebab,
	capitalToPascal,
	capitalToSnake,
} = require("../index");

test("Test: camelToCapital: for small camelCase", () => {
	expect(camelToCapital("isAnString")).toBe("Is An String");
});

test("Test: camelToCapital: for capital camelCase", () => {
	expect(camelToCapital("IsAnString")).toBe("Is An String");
});

test("Test: camelToConstant: for small camelCase", () => {
	expect(camelToConstant("isAnString")).toBe("IS_AN_STRING");
});

test("Test: camelToConstant: for capital camelCase", () => {
	expect(camelToConstant("IsAnString")).toBe("IS_AN_STRING");
});

test("Test: camelToKebab: for small camelCase", () => {
	expect(camelToKebab("isAnString")).toBe("is-an-string");
});

test("Test: camelToKebab: for capital camelCase", () => {
	expect(camelToKebab("IsAnString")).toBe("is-an-string");
});

test("Test: camelToPascal: for small camelCase", () => {
	expect(camelToPascal("isAnString")).toBe("IsAnString");
});

test("Test: camelToPascal: for capital camelCase", () => {
	expect(camelToPascal("IsAnString")).toBe("IsAnString");
});

test("Test: camelToSnake: for small camelCase", () => {
	expect(camelToSnake("isAnString")).toBe("is_an_string");
});

test("Test: camelToSnake: for capital camelCase", () => {
	expect(camelToSnake("IsAnString")).toBe("is_an_string");
});

test("Test: capitalToCamel: for `Hello World`", () => {
	expect(capitalToCamel("Hello World")).toBe("helloWorld");
});
