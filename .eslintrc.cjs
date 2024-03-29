module.exports = {
	root: true,
	extends: [
		"./node_modules/stijnklomp-linting-formatting-config/eslintRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/jestRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/typescript/typescriptRules.js",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
		project: "./tsconfig.json"
	},
	env: {
		browser: true,
		node: true,
		// commonjs: true,
		es6: true
	},
	settings: {
		"prettier/prettier": require("./node_modules/stijnklomp-linting-formatting-config/prettier/prettierRules.js")
	},
	rules: {
		"prettier/prettier": 2,
		quotes: ["error", "double"],
		semi: [
			"error",
			"never",
			{ beforeStatementContinuationChars: "always" }
		]
	}
}