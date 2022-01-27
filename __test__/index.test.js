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
	constantToCamel,
	constantToCapital,
	constantToKebab,
	constantToPascal,
	constantToSnake
} = require("../index");


// For camelToX

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

test("Test: camelToKebab | true: for small camelCase", () => {
	expect(camelToKebab("isAnString", true)).toBe("Is-An-String");
});

test("Test: camelToKebab | false: for small camelCase", () => {
	expect(camelToKebab("isAnString", false)).toBe("is-an-string");
});

test("Test: camelToKebab | true: for capital camelCase", () => {
	expect(camelToKebab("IsAnString", true)).toBe("Is-An-String");
});

test("Test: camelToKebab | false: for capital camelCase", () => {
	expect(camelToKebab("IsAnString", false)).toBe("is-an-string");
});

test("Test: camelToPascal: for small camelCase", () => {
	expect(camelToPascal("isAnString")).toBe("IsAnString");
});

test("Test: camelToPascal: for capital camelCase", () => {
	expect(camelToPascal("IsAnString")).toBe("IsAnString");
});

test("Test: camelToSnake | true: for small camelCase", () => {
	expect(camelToSnake("isAnString", true)).toBe("Is_An_String");
});
test("Test: camelToSnake | false: for small camelCase", () => {
	expect(camelToSnake("isAnString", false)).toBe("is_an_string");
});

test("Test: camelToSnake | true: for capital camelCase", () => {
	expect(camelToSnake("IsAnString", true)).toBe("Is_An_String");
});
test("Test: camelToSnake | false: for capital camelCase", () => {
	expect(camelToSnake("IsAnString", false)).toBe("is_an_string");
});


// For CapitalToX

test("Test: capitalToCamel: for `Capital Case`", () => {
	expect(capitalToCamel("Capital Case")).toBe("capitalCase");
});

test("Test: capitalToCamel | true: for `Capital Case`", () => {
	expect(capitalToCamel("Capital Case", true)).toBe("CapitalCase");
});

test("Test: capitalToConstant: for `Capital Case`", () => {
	expect(capitalToConstant("Capital Case")).toBe("CAPITAL_CASE");
});

test("Test: capitalToKebab | true: for `Capital Case`", () => {
	expect(capitalToKebab("Capital Case", true)).toBe("Capital-Case");
});

test("Test: capitalToKebab | false: for `Capital Case`", () => {
	expect(capitalToKebab("Capital Case", false)).toBe("capital-case");
});

test("Test: capitalToPascal: for `Capital Case`", () => {
	expect(capitalToPascal("Capital Case")).toBe("CapitalCase");
});

test("Test: capitalToSnake | true: for `Capital Case`", () => {
	expect(capitalToSnake("Capital Case", true)).toBe("Capital_Case");
});

test("Test: capitalToSnake | false: for `Capital Case`", () => {
	expect(capitalToSnake("Capital Case", false)).toBe("capital_case");
});


// For CONSTANT_CASE

test("Test constantToCamel | true", () => {
	expect(constantToCamel("CONSTANT_CASE", true)).toBe("ConstantCase");
});

test("Test constantToCamel | false", () => {
	expect(constantToCamel("CONSTANT_CASE", false)).toBe("constantCase");
});

test("Test constantToCapital", () => {
	expect(constantToCapital("CONSTANT_CASE", true)).toBe("Constant Case");
});

test("Test constantToKebab | true", () => {
	expect(constantToKebab("CONSTANT_CASE", true)).toBe("Constant-Case");
});

test("Test constantToKebab | false", () => {
	expect(constantToKebab("CONSTANT_CASE", false)).toBe("constant-case");
});

test("Test constantToPascal", () => {
	expect(constantToPascal("CONSTANT_CASE", false)).toBe("ConstantCase");
});

test("Test constantToSnake | true", () => {
	expect(constantToSnake("CONSTANT_CASE", true)).toBe("Constant_Case");
});

test("Test constantToSnake | false", () => {
	expect(constantToSnake("CONSTANT_CASE", false)).toBe("constant_case");
});
