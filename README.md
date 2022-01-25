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
- [CONSTANT_CASE]()
- [Kebab-Case]()
- [PascalCase]()
- [Snake_Case]()


### camelCase
In this category, all the method converts the camelCase string to another category string.

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
This method converts Capital Case string to camelCase case.
```javascript
console.log(capitalToCamel("Is An String"));
// isAnString
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

<hr>
The module is under construction please give your essential contribution to it. 🚧
