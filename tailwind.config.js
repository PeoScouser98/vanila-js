/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './components/**/*.{vue,js,ts,jsx,tsx}',
        './pages/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
/* eslint-disable */
	plugins: [require('daisyui')],
};
