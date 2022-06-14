import Typography from '../../../src/core/typography/Typography';

const fontsConfig = {
	letterSpacings: {
		'xs': -0.8,
		'sm': 0.4,
		'md': 0,
		'lg': 0.4,
		'xl': 0.8
	},
	lineHeights: {
		'xs': 18,
		'sm': 20,
		'md': 22,
		'lg': 24,
		'xl': 28
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},
	fontSizes: {
		'xs': 12,
		'sm': 14,
		'md': 16,
		'lg': 18,
		'xl': 20,
		'2xl': 24
	},
	fonts: {
		'Font1': {
			400: {
				normal: 'Font1-Regular',
				italic: 'Font1-RegularItalic'
			},
			500: {
				normal: 'Font1-Bold'
			}
		},
		'Font2': {
			400: {
				normal: 'Font2-Regular'
			}
		},
		'Font3': {
			500: {
				normal: 'Font2-Bold'
			}
		}
	}
};

describe( 'Typography', () => {
	const typography = new Typography( fontsConfig );

	describe( 'fontSize', () => {
		it( 'returns the correct value for the alias', () => {
			expect( typography.fontSize( 'sm' ) ).toEqual( 14 );
		} );

		it( 'returns null for a non-existing font size', () => {
			expect( typography.fontSize( 'xxxxxl' ) ).toBeUndefined();
		} );
	} );

	describe( 'lineHeight', () => {
		it( 'returns the correct value for the alias', () => {
			expect( typography.lineHeight( 'xs' ) ).toEqual( 18 );
		} );

		it( 'returns null for a non-existing line height', () => {
			expect( typography.lineHeight( 'xxxxxl' ) ).toBeUndefined();
		} );
	} );

	describe( 'letterSpacing', () => {
		it( 'returns the correct value for the alias', () => {
			expect( typography.letterSpacing( 'xl' ) ).toEqual( 0.8 );
		} );

		it( 'returns null for a non-existing letter spacing', () => {
			expect( typography.letterSpacing( 'xxxxxl' ) ).toBeUndefined();
		} );
	} );

	describe( 'fontWeight', () => {
		it( 'returns the correct value for the alias', () => {
			expect( typography.fontWeight( 'normal' ) ).toEqual( 400 );
		} );

		it( 'returns null for a non-existing font weight', () => {
			expect( typography.fontWeight( 'xxxxxl' ) ).toBeUndefined();
		} );
	} );

	describe( 'font', () => {
		it( 'returns the correct font family for the name, weight and variant', () => {
			expect( typography.font( 'Font1', { weight: 'normal', variant: 'italic' } ) ).toEqual( 'Font1-RegularItalic' );
		} );

		it( 'returns the font family for the normal variant if the italic is not defined', () => {
			expect( typography.font( 'Font1', { weight: 'medium', variant: 'italic' } ) ).toEqual( 'Font1-Bold' );
		} );

		it( 'returns by default the font family for the normal weight and normail variant', () => {
			expect( typography.font( 'Font1' ) ).toEqual( 'Font1-Regular' );
		} );

		it( 'returns normal weight font if there the specified weight alias doesn\'t exists', () => {
			expect( typography.font( 'Font2', { weight: 'extrasuperbold' } ) ).toEqual( 'Font2-Regular' );
		} );

		it( 'returns normal weight font if there is not font defined for the specified weight', () => {
			expect( typography.font( 'Font2', { weight: 'semibold' } ) ).toEqual( 'Font2-Regular' );
		} );

		it( 'returns undefined if there is not font defined for the normal weight', () => {
			expect( typography.font( 'Font3' ) ).toBeUndefined();
		} );

		it( 'returns undefined if the font doesn\'t exists', () => {
			expect( typography.font( 'Font4' ) ).toBeUndefined();
		} );
	} );
} );
