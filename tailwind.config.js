/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
=======
const plugin = require('tailwindcss/plugin');

const Myclass = plugin(function ({ addUtilities }) {
	addUtilities({
		'.my-rotate-y-180': {
			transform: 'rotateY(180deg)',
		},
		'.preserve-3d': {
			transformStyle: 'preserve-3d',
		},
		'.perspective': {
			perspective: '1000px',
		},
		'.backface-hidden': {
			backfaceVisibility: 'hidden',
		},
	});
});

export default {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// important: '#root',
	theme: {
		extend: {},
	},
	plugins: [Myclass],
>>>>>>> 58b91fc5b02cf4ca5391208dfe3e21ff3536013c
};
