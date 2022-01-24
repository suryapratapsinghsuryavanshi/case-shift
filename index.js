let camelCaseToArray = (camelCaseString) => {
	if(camelCaseString.charAt(0).charCodeAt(0) < 97) {
		camelCaseString = camelCaseString.charAt(0).toLowerCase() + camelCaseString.slice(1);
	}
	let res = camelCaseString.replace(/([A-Z])/g, " $1");
	return res.toLowerCase().split(" ");
}

let capitalCaseToArray = (capitalCaseString) => {
	return capitalCaseString.split(" ").map(val => val.toLowerCase());
}

// One case to another case method group.

/**
 * A method for converting camelCase or CamelCase string to Capital Case string.
 * @param {string} camelCaseString camelCase string for converting in capital case.
 * @returns {string} `Capital Case` string.
 */
let camelToCapital = (camelCaseString) => {
	return camelCaseToArray(camelCaseString)
		.map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ");
}


/**
 * A method for converting camelCase or CamelCase string to CONSTENT_CASE string.
 * @param {string} camelCaseString camelCase string for converting in CONSTENT_CASE.
 * @returns {string} `CONSTENT_CASE` string.
 */
let camelToConstant = (camelCaseString) => {
	return camelCaseToArray(camelCaseString).map(val => val.toUpperCase()).join("_");
}


/**
 * A method for converting camelCase or CamelCase string to Kebab-Case string.
 * @param {string} camelCaseString camelCase string for converting in Kebab-Case.
 * @returns {string} `Kebab-Case` string.
 */
let camelToKebab = (camelCaseString) => {
	return camelCaseToArray(camelCaseString).join("-");
}


/**
 * A method for converting camelCase or CamelCase string to PascalCase string.
 * @param {string} camelCaseString camelCase string for converting in PascalCase.
 * @returns {string} `PascalCase` string.
 */
let camelToPascal = (camelCaseString) => {
	return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
}


/**
 * A method for converting camelCase or CamelCase string to snake_case string.
 * @param {string} camelCaseString camelCase string for converting in snake_case.
 * @returns {string} `snake_case` string.
 */
let camelToSnake = (camelCaseString) => {
	return camelCaseToArray(camelCaseString).join("_");
}

/**
 * A method for converting Capitaal Case string to camelCase string.
 * @param {string} capitalCaseString Capitaal Case string for converting in camelCase.
 * @returns {string} `camelCase` string.
 */
let capitalToCamel = (capitalCaseString) => {

}

/**
 * A method for converting Capitaal Case string to CONSTENT_CASE string.
 * @param {string} capitalCaseString Capitaal Case string for converting in CONSTENT_CASE.
 * @returns {string} `CONSTENT_CASE` string.
 */
let capitalToConstant = (capitalCaseString) => {

}

/**
 * A method for converting Capitaal Case string to Kebab-Case string.
 * @param {string} capitalCaseString Capitaal Case string for converting in Kebab-Case.
 * @returns {string} `Kebab-Case` string.
 */
let capitalToKebab = (capitalCaseString) => {

}

/**
 * A method for converting Capitaal Case string to PascalCase string.
 * @param {string} capitalCaseString Capitaal Case string for converting in PascalCase.
 * @returns {string} `PascalCase` string.
 */
let capitalToPascal = (capitalCaseString) => {

}

/**
 * A method for converting Capitaal Case string to snake_case string.
 * @param {string} capitalCaseString Capitaal Case string for converting in snake_case.
 * @returns {string} `snake_case` string.
 */
let capitalToSnake = (capitalCaseString) => {

}

module.exports = {
	camelToCapital,
	camelToConstant,
	camelToKebab,
	camelToPascal,
	camelToSnake,
	capitalToCamel,
	capitalToConstant,
	capitalToKebab,
	capitalToPascal,
	capitalToSnake
}
