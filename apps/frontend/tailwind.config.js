const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      colors:{
        primary: {
          DEFAULT: '#D41790',
          50: '#F6ADDC',
          100: '#F49AD4',
          200: '#F075C4',
          300: '#EC51B4',
          400: '#E82CA4',
          500: '#D41790',
          600: '#A1126E',
          700: '#6F0C4B',
          800: '#3C0729',
          900: '#0A0106',
          950: '#000000'
        },
        danger:{
          DEFAULT: '#D41790',
          50: '#F6ADDC',
          100: '#F49AD4',
          200: '#F075C4',
          300: '#EC51B4',
          400: '#E82CA4',
          500: '#D41790',
          600: '#A1126E',
          700: '#6F0C4B',
          800: '#3C0729',
          900: '#0A0106',
          950: '#000000'
        },
      }
    },
	},
	darkMode: "class",
	plugins: [
		nextui(),
		require('tailwindcss-animated')
	],
};
