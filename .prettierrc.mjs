/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	semi: true,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: true,
	printWidth: 120,
	htmlWhitespaceSensitivity: 'ignore',
	singleAttributePerLine: false,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
	tailwindFunctions: ['cn'],
};
