/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-background': '#000000'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
};
