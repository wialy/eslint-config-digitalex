module.exports = {
	extends: ['plugin:sonarjs/recommended', 'plugin:unicorn/recommended'],
	rules: {
		'unicorn/prevent-abbreviations': ['error', { checkFilenames: false }],
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-useless-undefined': 'off',
	},
};
