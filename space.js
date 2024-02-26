module.exports = {
	rules: {
		// Newlines
		'padding-line-between-statements': [
			'error',
			// before export, return, continue and break
			{
				blankLine: 'always',
				next: ['export', 'return', 'continue', 'break'],
				prev: '*',
			},
			// before and after logical statements and loops
			{
				blankLine: 'always',
				next: '*',
				prev: ['block-like'],
			},
			// between `case` or `default` statements
			{
				blankLine: 'always',
				next: ['case', 'default'],
				prev: ['case', 'default'],
			},
			// after directives
			{ blankLine: 'always', next: '*', prev: 'directive' },
			{ blankLine: 'any', next: 'directive', prev: 'directive' },
			// "any" blank line is needed between "export" statements to be compatible with sort lint rules
			{
				blankLine: 'any',
				next: 'export',
				prev: 'export',
			},
		],
	},
};
