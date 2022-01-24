// One case to another case method group.

/**
 * A method for converting camelCase or CamelCase string to Capital Case string.
 * @param {string} camelCaseString camelCase string for converting in capital case.
 * @returns {string} `Capital Case` string.
 */
let camelToCapital = (camelCaseString) => {
	if(camelCaseString.charAt(0).charCodeAt(0) < 97) {
		camelCaseString = camelCaseString.charAt(0).toLowerCase() + camelCaseString.slice(1);
	}
	let res = camelCaseString.replace(/([A-Z])/g, " $1");
	return res.charAt(0).toUpperCase() + res.slice(1);
}

module.exports = {
	camelToCapital
}
