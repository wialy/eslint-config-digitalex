module.exports = {
	plugins: [
		'eslint-plugin-sort-keys-fix',
		'typescript-sort-keys',
		'simple-import-sort',
		'sort-destructure-keys',
	],
	rules: {
		'simple-import-sort/exports': 'error',

		// https://github.com/lydell/eslint-plugin-simple-import-sort
		'simple-import-sort/imports': 'error',

		// https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys
		'sort-destructure-keys/sort-destructure-keys': 'error',

		// https://eslint.org/docs/latest/rules/
		'sort-imports': 'off',

		// https://github.com/leo-buneev/eslint-plugin-sort-keys-fix
		'sort-keys-fix/sort-keys-fix': 'error',

		// https://github.com/infctr/eslint-plugin-typescript-sort-keys
		'typescript-sort-keys/interface': 'error',

		'typescript-sort-keys/string-enum': 'error',
	},
};
