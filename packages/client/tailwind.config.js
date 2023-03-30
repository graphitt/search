/* eslint-disable */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', '../../node_modules/flowbite/**/*.js'],
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
