const typography = {
	letterSpacings: {
		'2xs': -0.8,
		'xs': -0.4,
		'sm': 0.1,
		'md': 0.4,
		'lg': 0.8,
		'xl': 1.6
	},
	lineHeights: {
		'2xs': 16,
		'xs': 18,
		'sm': 20,
		'md': 22,
		'lg': 24,
		'xl': 28,
		'2xl': 32,
		'3xl': 40
	},
	fontWeights: {
		thin: '100',
		xlight: '200',
		light: '300',
		regular: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
		black: '900'
	},
	fontSizes: {
		'2xs': 12,
		'xs': 14,
		'sm': 16,
		'md': 18,
		'lg': 20,
		'xl': 24,
		'2xl': 30,
		'3xl': 32
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
				normal: 'Inter-Thin',
				italic: 'Inter-ThinItalic'
			},
			200: {
				normal: 'Inter-ExtraLight',
				italic: 'Inter-ExtraLightItalic'
			},
			300: {
				normal: 'Inter-Light',
				italic: 'Inter-LightItalic'
			},
			400: {
				normal: 'Inter-Regular',
				italic: 'Inter-Italic'
			},
			500: {
				normal: 'Inter-Medium',
				italic: 'Inter-MediumItalic'
			},
			600: {
				normal: 'Inter-SemiBold',
				italic: 'Inter-SemiBoldItalic'
			},
			700: {
				normal: 'Inter-Bold',
				italic: 'Inter-BoldItalic'
			},
			800: {
				normal: 'Inter-ExtraBold',
				italic: 'Inter-ExtraBoldItalic'
			},
			900: {
				normal: 'Inter-Black',
				italic: 'Inter-BlackItalic'
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
