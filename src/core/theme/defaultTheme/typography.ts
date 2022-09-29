import type { FontConfig } from '../../typography/types';

const FONT_WEIGHT_ALIASES: { [ weight: string ]: string } = Object.freeze( {
	100: 'Thin',
	200: 'ExtraLight',
	300: 'Light',
	400: 'Regular',
	500: 'Medium',
	600: 'SemiBold',
	700: 'Bold',
	800: 'ExtraBold',
	900: 'Black'
} );

const fontConfigFor = ( fontName: string ) => Object
	.keys( FONT_WEIGHT_ALIASES )
	.reduce(
		( res, fontWeightKey ) => {
			const fontWeight = parseInt( fontWeightKey, 10 );
			const fontWeightAlias = FONT_WEIGHT_ALIASES[ fontWeight ];

			res[ fontWeight ] = {
				normal: `${fontName}-${fontWeightAlias}`,
				italic: `${fontName}-${fontWeightAlias}Italic`
			};

			return res;
		},
		{} as FontConfig
	);

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
		'Epilogue': fontConfigFor(
			'Epilogue'
		),
		'Inter': {
			...fontConfigFor( 'Inter' ),
			400: {
				normal: 'Inter-Regular',
				italic: 'Inter-Italic'
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
