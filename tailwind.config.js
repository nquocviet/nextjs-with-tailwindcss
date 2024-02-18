module.exports = {
	content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		screens: {
			xs: '536px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		container: {
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1240px',
				'2xl': '1400px',
			},
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
			},
		},
		fontFamily: {},
		fontSize: {
			'display-2xl': ['var(--fs-display-2xl)', 'var(--lh-display-2xl)'],
			'display-xl': ['var(--fs-display-xl)', 'var(--lh-display-xl)'],
			'display-lg': ['var(--fs-display-lg)', 'var(--lh-display-lg)'],
			'display-md': ['var(--fs-display-md)', 'var(--lh-display-md)'],
			'display-sm': ['var(--fs-display-sm)', 'var(--lh-display-sm)'],
			'display-xs': ['var(--fs-display-xs)', 'var(--lh-display-xs)'],
			xl: ['var(--fs-text-xl)', 'var(--lh-text-xl)'],
			lg: ['var(--fs-text-lg)', 'var(--lh-text-lg)'],
			md: ['var(--fs-text-md)', 'var(--lh-text-md)'],
			sm: ['var(--fs-text-sm)', 'var(--lh-text-sm)'],
			xs: ['var(--fs-text-xs)', 'var(--lh-text-xs)'],
			'2xs': ['var(--fs-text-2xs)', 'var(--lh-text-2xs)'],
		},
		fontWeight: {
			light: 'var(--fw-light)',
			regular: 'var(--fw-regular)',
			medium: 'var(--fw-medium)',
			semibold: 'var(--fw-semibold)',
			bold: 'var(--fw-bold)',
			extrabold: 'var(--fw-extrabold)',
			black: 'var(--fw-black)',
		},
		extend: {
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				'2xl': 'var(--shadow-2xl)',
				'3xl': 'var(--shadow-3xl)',
			},
			colors: {
				white: 'var(--white)',
				black: 'var(--black)',
				primary: {
					25: 'rgb(var(--primary-25) / <alpha-value>)',
					50: 'rgb(var(--primary-50) / <alpha-value>)',
					100: 'rgb(var(--primary-100) / <alpha-value>)',
					200: 'rgb(var(--primary-200) / <alpha-value>)',
					300: 'rgb(var(--primary-300) / <alpha-value>)',
					400: 'rgb(var(--primary-400) / <alpha-value>)',
					500: 'rgb(var(--primary-500) / <alpha-value>)',
					600: 'rgb(var(--primary-600) / <alpha-value>)',
					700: 'rgb(var(--primary-700) / <alpha-value>)',
					800: 'rgb(var(--primary-800) / <alpha-value>)',
					900: 'rgb(var(--primary-900) / <alpha-value>)',
				},
				gray: {
					25: 'rgb(var(--gray-25) / <alpha-value>)',
					50: 'rgb(var(--gray-50) / <alpha-value>)',
					100: 'rgb(var(--gray-100) / <alpha-value>)',
					200: 'rgb(var(--gray-200) / <alpha-value>)',
					300: 'rgb(var(--gray-300) / <alpha-value>)',
					400: 'rgb(var(--gray-400) / <alpha-value>)',
					500: 'rgb(var(--gray-500) / <alpha-value>)',
					600: 'rgb(var(--gray-600) / <alpha-value>)',
					700: 'rgb(var(--gray-700) / <alpha-value>)',
					800: 'rgb(var(--gray-800) / <alpha-value>)',
					900: 'rgb(var(--gray-900) / <alpha-value>)',
				},
				blue: {
					25: 'rgb(var(--blue-25) / <alpha-value>)',
					50: 'rgb(var(--blue-50) / <alpha-value>)',
					100: 'rgb(var(--blue-100) / <alpha-value>)',
					200: 'rgb(var(--blue-200) / <alpha-value>)',
					300: 'rgb(var(--blue-300) / <alpha-value>)',
					400: 'rgb(var(--blue-400) / <alpha-value>)',
					500: 'rgb(var(--blue-500) / <alpha-value>)',
					600: 'rgb(var(--blue-600) / <alpha-value>)',
					700: 'rgb(var(--blue-700) / <alpha-value>)',
					800: 'rgb(var(--blue-800) / <alpha-value>)',
					900: 'rgb(var(--blue-900) / <alpha-value>)',
				},
				red: {
					25: 'rgb(var(--red-25) / <alpha-value>)',
					50: 'rgb(var(--red-50) / <alpha-value>)',
					100: 'rgb(var(--red-100) / <alpha-value>)',
					200: 'rgb(var(--red-200) / <alpha-value>)',
					300: 'rgb(var(--red-300) / <alpha-value>)',
					400: 'rgb(var(--red-400) / <alpha-value>)',
					500: 'rgb(var(--red-500) / <alpha-value>)',
					600: 'rgb(var(--red-600) / <alpha-value>)',
					700: 'rgb(var(--red-700) / <alpha-value>)',
					800: 'rgb(var(--red-800) / <alpha-value>)',
					900: 'rgb(var(--red-900) / <alpha-value>)',
				},
				yellow: {
					25: 'rgb(var(--yellow-25) / <alpha-value>)',
					50: 'rgb(var(--yellow-50) / <alpha-value>)',
					100: 'rgb(var(--yellow-100) / <alpha-value>)',
					200: 'rgb(var(--yellow-200) / <alpha-value>)',
					300: 'rgb(var(--yellow-300) / <alpha-value>)',
					400: 'rgb(var(--yellow-400) / <alpha-value>)',
					500: 'rgb(var(--yellow-500) / <alpha-value>)',
					600: 'rgb(var(--yellow-600) / <alpha-value>)',
					700: 'rgb(var(--yellow-700) / <alpha-value>)',
					800: 'rgb(var(--yellow-800) / <alpha-value>)',
					900: 'rgb(var(--yellow-900) / <alpha-value>)',
				},
				green: {
					25: 'rgb(var(--green-25) / <alpha-value>)',
					50: 'rgb(var(--green-50) / <alpha-value>)',
					100: 'rgb(var(--green-100) / <alpha-value>)',
					200: 'rgb(var(--green-200) / <alpha-value>)',
					300: 'rgb(var(--green-300) / <alpha-value>)',
					400: 'rgb(var(--green-400) / <alpha-value>)',
					500: 'rgb(var(--green-500) / <alpha-value>)',
					600: 'rgb(var(--green-600) / <alpha-value>)',
					700: 'rgb(var(--green-700) / <alpha-value>)',
					800: 'rgb(var(--green-800) / <alpha-value>)',
					900: 'rgb(var(--green-900) / <alpha-value>)',
				},
			},
			width: {},
			height: {},
			spacing: {},
			zIndex: {
				negative: 'var(--z-negative)',
				elevate: 'var(--z-elevate)',
				sticky: 'var(--z-sticky)',
				drawer: 'var(--z-drawer)',
				dropdown: 'var(--z-dropdown)',
				modal: 'var(--z-modal)',
				popover: 'var(--z-popover)',
				maximum: 'var(--z-maximum)',
			},
		},
		animation: {},
		keyframes: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		function ({ addVariant }) {
			addVariant('child', '& > *')
			addVariant('child-hover', '& > *:hover')
			addVariant('descendant', '& *')
			addVariant('descendant-hover', '& *:hover')
		},
	],
}
