/** @format */

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/function-component-definition': 'off',
		semi: 'off',
		'no-tabs': 'off',
		'jsx-quotes': 'off',
		'react/jsx-indent': 'off',
		indent: 'off',
	},
}
