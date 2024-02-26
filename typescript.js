module.exports = {
	extends: [
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
			},
			typescript: {
				project: 'tsconfig.json',
			},
		},
	},
	rules: {
		'@typescript-eslint/no-shadow': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
	},
	overrides: [
		{
			files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
			rules: {
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/unbound-method': 'off',
			},
		},
	],
};
