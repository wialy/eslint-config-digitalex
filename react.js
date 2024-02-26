module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/strict',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// Enforce the consistent use of double quotes in JSX attributes
		// https://eslint.org/docs/latest/rules/jsx-quotes
		'jsx-quotes': ['error', 'prefer-double'],

		'react-hooks/exhaustive-deps': 'error',

		// Auto-fixable rules
		// Enforce destructuring assignment of props, state, and context
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
		'react/destructuring-assignment': ['error', 'always'],

		// Enforce a specific function type for function components
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],

		// Enforce boolean attributes notation in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': ['error', 'never'],

		// Disallow unnecessary JSX expressions when literals alone are sufficient
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md
		'react/jsx-curly-brace-presence': [
			'error',
			{
				children: 'never',
				propElementValues: 'always',
				props: 'never',
			},
		],

		// Enforce shorthand form for React fragments
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md
		'react/jsx-fragments': ['error', 'syntax'],

		'react/jsx-newline': ['error', { prevent: false }],

		// Disallow problematic leaked values from being rendered
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-leaked-render.md
		'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce'] }],

		// Disallow unnecessary fragments
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-useless-fragment.md
		'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

		// Sort component properties
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				reservedFirst: true,
				shorthandFirst: true,
			},
		],

		'react/jsx-uses-react': 'off',

		// Lifecycle methods should be methods on the prototype, not class fields
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-arrow-function-lifecycle.md
		'react/no-arrow-function-lifecycle': 'error',

		// Disallow usage of invalid attributes
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-invalid-html-attribute.md
		'react/no-invalid-html-attribute': 'error',

		// Disallow usage of unknown DOM property
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 'error',

		// Disabled recommended rules
		// Disallow missing props validation in a React component definition
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
		// Disabled due to:
		// - False-positive checks for if `props` is used as a variable name
		// - Typescript provides sufficient support for type checking.
		'react/prop-types': 'off',

		'react/react-in-jsx-scope': 'off',

		// Disallow extra closing tags for components without children
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
	},
};
