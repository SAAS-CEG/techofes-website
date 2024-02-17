/** @type {import('tailwindcss').Config} */
<<<<<<<<< Temporary merge branch 1
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
=========
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
	important: '#root',
	theme: {
		extend: {
			backgroundImage: {
				sea1: 'url("https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
				sea2: 'url("https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',
				sea3: 'url("https://images.unsplash.com/photo-1503177847378-d2048487fa46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")',
			},
		},
	},
	plugins: [Myclass],
>>>>>>>>> Temporary merge branch 2
};
