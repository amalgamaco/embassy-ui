import Palette from '../../../src/core/palette/Palette';

const colorsConfig = {
	base: {
		primary: {
			900: '#2200C1',
			800: '#4600c8',
			700: '#5700ce',
			600: '#6700d6',
			500: '#7101dc',
			400: '#8a3fe2',
			300: '#a066e8',
			200: '#bc94ee',
			100: '#d7bff4',
			50: '#f0e5fb'
		},
		neutral: '#000000'
	},
	dark: {
		primary: {
			300: '#aaffee'
		},
		neutral: '#ffffff'
	}
};

describe( 'Palette', () => {
	const palette = new Palette( colorsConfig );

	describe( 'colors', () => {
		it( 'returns the palette\'s colors definition', () => {
			expect( palette.colors ).toEqual( colorsConfig );
		} );
	} );

	describe( 'colorFor', () => {
		describe( 'for a color without variants range', () => {
			it( 'returns the correct value', () => {
				expect( palette.colorFor( 'neutral' ) ).toEqual( '#000000' );
			} );

			it( 'returns the correct value for the color mode', () => {
				expect( palette.colorFor( 'neutral', { colorMode: 'dark' } ) ).toEqual( '#ffffff' );
			} );
		} );

		describe( 'for a color with variants range', () => {
			it( 'returns the correct value for the color variant', () => {
				expect( palette.colorFor( 'primary.300' ) ).toEqual( '#a066e8' );
			} );

			it( 'returns the correct value for the color mode', () => {
				expect( palette.colorFor( 'primary.300', { colorMode: 'dark' } ) ).toEqual( '#aaffee' );
			} );

			it( 'returns undefined when the color doesn\'t exists', () => {
				expect( palette.colorFor( 'secondary.300' ) ).toEqual( undefined );
			} );

			it( 'returns undefined when the color variant doen\'t exists', () => {
				expect( palette.colorFor( 'primary.350' ) ).toEqual( undefined );
			} );
		} );
	} );
} );
