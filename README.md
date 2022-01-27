![Case-Shift](/static/logo.gif)<br>
Simple npm package for converting the case from one format to another.

<b>📦 Install with the help of npm or yarn</b>

```sh
npm install case-shift
# or
yarn add case-shift
```

## Case Conversion
The one case string converts the below to all the categories. Follow the further documentation.
- [camelCase](#camelcase)
- [Capital Case](#capital-case)
- [CONSTANT_CASE](#CONSTANT_CASE)
- [Kebab-Case]()
- [PascalCase]()
- [Snake_Case]()


### camelCase
In this category, all the method converts the camelCase string to another category string. The camelCase method supports both lowerCamelCase(`isAnString`) and UpperCamelCase(`IsAnString`) strings for conversion.

```javascript
const {
	camelToCapital,
	camelToConstant,
	camelToKebab,
	camelToPascal,
	camelToSnake
} = require("case-shift");
```

- <b>camelToCapital</b><br>
This method converts camelCase string to capital case.
```javascript
console.log(camelToCapital("isAnString"));
// Is An String
```
<br>

- <b>camelToConstant</b><br>
This method converts camelCase string to constant case.
```javascript
console.log(camelToConstant("isAnString"));
// IS_AN_STRING
```
<br>

- <b>camelToKebab</b><br>
This method converts camelCase string to kebab case. If the second argument is true, returns capital kebab case string, else small kebab case string. Defaults are `true`.
```javascript
console.log(camelToKebab("isAnString"));
// Is-An-String
console.log(camelToKebab("isAnString", false));
// is-an-string
```
<br>

- <b>camelToPascal</b><br>
This method converts camelCase string to pascal case.
```javascript
console.log(camelToPascal("isAnString"));
// IsAnString
```
<br>

- <b>camelToSnake</b><br>
This method converts camelCase string to snake case. If the second argument is true, returns capital snake case string, else small snake case string. Defaults are `true`.
```javascript
console.log(camelToSnake("isAnString"));
// Is_An_String
console.log(camelToSnake("isAnString", false));
// is_an_string
```
<br>


### Capital Case
In this category, all the method converts the Capital Case string to another category string.

```javascript
const {
	capitalToCamel,
	capitalToConstant,
	capitalToKebab,
	capitalToPascal,
	capitalToSnake
} = require("case-shift");
```

- <b>capitalToCamel</b><br>
This method converts Capital Case string to camelCase case. If second optional argument is true return `UpperCamelCase` string, default `false`.
```javascript
console.log(capitalToCamel("Is An String"));
// isAnString
console.log(capitalToCamel("Is An String", true));
// IsAnString
```
<br>

- <b>capitalToConstant</b><br>
This method converts Capital Case string to constant case.
```javascript
console.log(capitalToConstant("Is An String"));
// IS_AN_STRING
```
<br>

- <b>capitalToKebab</b><br>
This method converts Capital Case string to kebab case. If the second argument is true, returns capital kebab case string, else small kebab case string. Defaults are `true`.
```javascript
console.log(capitalToKebab("Is An String"));
// Is-An-String
console.log(capitalToKebab("Is An String", false));
// is-an-string
```
<br>

- <b>capitalToPascal</b><br>
This method converts Capital Case string to pascal case.
```javascript
console.log(capitalToPascal("Is An String"));
// IsAnString
```
<br>

- <b>capitalToSnake</b><br>
This method converts Capital Case string to snake case. If the second argument is true, returns capital snake case string, else small snake case string. Defaults are `true`.
```javascript
console.log(capitalToSnake("Is An String"));
// Is_An_String
console.log(capitalToSnake("Is An String", false));
// is_an_string
```
<br>


### CONSTANT_CASE
In this category, all the method converts the CONSTANT_CASE string to another category string.

```javascript
const {
	constantToCamel,
	constantToCapital,
	constantToKebab,
	constantToPascal,
	constantToSnake
} = require("case-shift");
```

- <b>constantToCamel</b><br>
This method converts CONSTANT_CASE string to camelCase case. If second optional argument is true return `UpperCamelCase` string, default `false`.
```javascript
console.log(constantToCamel("IS_AN_STRING"));
// isAnString
console.log(constantToCamel("IS_AN_STRING", true));
// IsAnString
```
<br>

- <b>constantToCapital</b><br>
This method converts CONSTANT_CASE string to Capital Case string.
```javascript
console.log(constantToCapital("IS_AN_STRING"));
// Is An String
```
<br>

- <b>constantToKebab</b><br>
This method converts CONSTANT_CASE string to kebab case. If the second argument is true, returns capital kebab case string, else small kebab case string. Defaults are `true`.
```javascript
console.log(constantToKebab("IS_AN_STRING"));
// Is-An-String
console.log(constantToKebab("IS_AN_STRING", false));
// is-an-string
```
<br>

- <b>constantToPascal</b><br>
This method converts CONSTANT_CASE string to pascal case.
```javascript
console.log(constantToPascal("IS_AN_STRING"));
// IsAnString
```
<br>

- <b>constantToSnake</b><br>
This method converts CONSTANT_CASE string to snake case. If the second argument is true, returns capital snake case string, else small snake case string. Defaults are `true`.
```javascript
console.log(constantToSnake("IS_AN_STRING"));
// Is_An_String
console.log(constantToSnake("IS_AN_STRING", false));
// is_an_string
```
<br>


### Kebab-Case
In this category, all the method converts the Kebab-Case string to another category string.

```javascript
const {
	kebabToCamel,
	kebabToCapital,
	kebabToConstant,
	kebabToPascal,
	kebabToSnake
} = require("case-shift");
```

- <b>kebabToCamel</b><br>
This method converts Kebab-Case string to camelCase case. If second optional argument is true return `UpperCamelCase` string, default `false`.
```javascript
console.log(kebabToCamel("Is-An-String"));
// isAnString
console.log(kebabToCamel("Is-An-String", true));
// IsAnString
```
<br>

- <b>kebabToCapital</b><br>
This method converts Kebab-Case string to Capital Case string.
```javascript
console.log(kebabToCapital("Is-An-String"));
// Is An String
```
<br>

- <b>kebabToConstant</b><br>
This method converts Kebab-Case string to CONSTANT_CASE string.
```javascript
console.log(kebabToConstant("Is-An-String"));
// IS_AN_STRING
```
<br>

- <b>kebabToPascal</b><br>
This method converts Kebab-Case string to pascal case.
```javascript
console.log(kebabToPascal("Is-An-String"));
// IsAnString
```
<br>

- <b>kebabToSnake</b><br>
This method converts Kebab-Case string to snake_case. If the second argument is true, returns capital snake_case string, else small snake_case string. Defaults are `true`.
```javascript
console.log(kebabToSnake("Is-An-String"));
// Is_An_String
console.log(kebabToSnake("Is-An-String", false));
// is_an_string
```
<br>

<hr>
The module is under construction please give your essential contribution to it. 🚧
