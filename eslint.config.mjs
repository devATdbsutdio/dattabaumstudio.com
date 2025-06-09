import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-plugin-prettier';

// parsers
const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
	globalIgnores([
		// Ignore artifacts
		'dist',
		'.astro',
		'.vscode',
		'.vercel',

		// Standard
		'.git',
		'.svn',
		'.hg',
		'node_modules',

		// lockfiles
		'package-lock.json',
	]),
	// Global configuration
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	// Base configs
	js.configs.recommended,
	tseslint.configs.recommended,

	// Prettier config
	{
		plugins: {
			prettier: prettier,
		},
		rules: {
			// disable warnings, since prettier should format on save
			'prettier/prettier': 'off',
		},
	},

	// astro setup with a11y
	astro.configs.recommended,
	astro.configs['jsx-a11y-recommended'],
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
				ecmaVersion: 'latest',
				project: './tsconfig.json',
			},
		},
		rules: {
			'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
			'@typescript-eslint/no-explicit-any': 'off', // you may want this as it can get annoying,
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'react/react-in-jsx-scope': 0,
			'no-constant-condition': [2, { checkLoops: false }],
			'no-cond-assign': [2],
			'prefer-spread': [1],
		},
	},

	// Ignore patterns
	{
		ignores: ['dist/**', '**/*.d.ts', '.github/'],
	},
]);
