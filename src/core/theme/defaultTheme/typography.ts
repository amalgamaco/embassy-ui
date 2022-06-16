const typography = {
	letterSpacings: {
		'xs': -0.4,
		'sm': 0,
		'md': 0.1,
		'lg': 0.15,
		'xl': 0.18,
		'2xl': 0.25
	},
	lineHeights: {
		'xs': 16,
		'sm': 19,
		'md': 20,
		'lg': 24,
		'xl': 28,
		'2xl': 32,
		'3xl': 42,
		'4xl': 48,
		'5xl': 64
	},
	fontWeights: {
		hairline: '100',
		thin: '200',
		light: '300',
		normal: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
		black: '900'
	},
	fontSizes: {
		'2xs': 10,
		'xs': 12,
		'sm': 14,
		'md': 16,
		'lg': 18,
		'xl': 20,
		'2xl': 24,
		'3xl': 30,
		'4xl': 34,
		'5xl': 48,
		'6xl': 60,
		'7xl': 72,
		'8xl': 96,
		'9xl': 128
	},
	fonts: {
		'Epilogue': {
			100: {
				normal: 'Epilogue-Thin',
				italic: 'Epilogue-ThinItalic'
			},
			200: {
				normal: 'Epilogue-ExtraLight',
				italic: 'Epilogue-ExtraLightItalic'
			},
			300: {
				normal: 'Epilogue-Light',
				italic: 'Epilogue-LightItalic'
			},
			400: {
				normal: 'Epilogue-Regular',
				italic: 'Epilogue-RegularItalic'
			},
			500: {
				normal: 'Epilogue-Medium',
				italic: 'Epilogue-MediumItalic'
			},
			600: {
				normal: 'Epilogue-SemiBold',
				italic: 'Epilogue-SemiBoldItalic'
			},
			700: {
				normal: 'Epilogue-Bold',
				italic: 'Epilogue-BoldItalic'
			},
			800: {
				normal: 'Epilogue-ExtraBold',
				italic: 'Epilogue-ExtraBoldItalic'
			},
			900: {
				normal: 'Epilogue-Black',
				italic: 'Epilogue-BlackItalic'
			}
		},
		'Inter': {
			100: {
				normal: 'Inter-Thin'
			},
			200: {
				normal: 'Inter-ExtraLight'
			},
			300: {
				normal: 'Inter-Light'
			},
			400: {
				normal: 'Inter-Regular'
			},
			500: {
				normal: 'Inter-Medium'
			},
			600: {
				normal: 'Inter-SemiBold'
			},
			700: {
				normal: 'Inter-Bold'
			},
			800: {
				normal: 'Inter-ExtraBold'
			},
			900: {
				normal: 'Inter-Black'
			}
		}
	}
};

export type IFont = keyof typeof typography.fonts;
export type IFontSize = keyof typeof typography.fontSizes;
export type IFontWeight = keyof typeof typography.fontWeights;
export type ILetterSpacing = keyof typeof typography.letterSpacings;
export type ILineHeight = keyof typeof typography.lineHeights;

export default typography;
