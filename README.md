# @digitalex/eslint-config

This package provides a set of ESLint configurations tailored for use in [DigitalEx](https://digitalex.me) projects. The rules are opinionated and mostly auto-fixable.

## Installation

You can install this package via npm or yarn:

```
npm install @digitalex/eslint-config --save-dev
```

or

```
yarn add @digitalex/eslint-config --dev
```

## Usage

Once installed, you can extend the configuration in your ESLint configuration file (e.g., .eslintrc.js or .eslintrc.json):

```
{
  "extends": "@digitalex"
}
```

You can also extend specific configurations provided by this package. For example, if you only want to use the React configuration, you can do so as follows:

```
{
  "extends": [
    "@digitalex/eslint-config/base",
    "@digitalex/eslint-config/typescript"
  ]
}
```

## Configurations

This package includes the following configurations. Feel free to explore and use the configurations that best suit your project's needs.

### @digitalex/eslint-config/base

Base configuration with a set of opinionated rules.

- eslint:recommended
- plugin:import/recommended

### @digitalex/eslint-config/typescript

Configuration for TypeScript projects.

- plugin:@typescript-eslint/strict
- plugin:@typescript-eslint/recommended
- plugin:@typescript-eslint/recommended-requiring-type-checking
- plugin:import/typescript

### @digitalex/eslint-config/react

Tailored for React projects.

- plugin:react/recommended
- plugin:react-hooks/recommended
- plugin:jsx-a11y/strict

### @digitalex/eslint-config/sort

For sorting keys and imports.

- typescript-sort-keys
- simple-import-sort
- sort-destructure-keys

### @digitalex/eslint-config/strict

Includes multiple plugins enhancing code quality.

- plugin:sonarjs/recommended
- plugin:unicorn/recommended

### @digitalex/eslint-config/space

Configuration for adding extra newlines between some statements.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/wialy/eslint-config-digitalex).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENCE.md) file for details.
