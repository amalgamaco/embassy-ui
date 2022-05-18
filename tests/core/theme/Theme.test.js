import Palette from '../../../src/core/palette/Palette';
import Theme from '../../../src/core/theme/Theme';

const palette = new Palette(
	{
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
	}
);

describe( 'Theme', () => {
	const createTheme = ( { colorMode = 'light' } = {} ) => (
		new Theme( {
			palette,
			colorMode
		} )
	);

	describe( 'constructor', () => {
		it( 'by default sets the color mode to light', () => {
			const theme = new Theme( { palette } );
			expect( theme.colorMode ).toEqual( 'light' );
		} );
	} );

	describe( 'palette', () => {
		const theme = createTheme();

		it( 'returns the theme\'s palette', () => {
			expect( theme.palette ).toEqual( palette );
		} );
	} );

	describe( 'colorMode', () => {
		const theme = createTheme();

		it( 'returns the theme\'s color mode', () => {
			expect( theme.colorMode ).toEqual( 'light' );
		} );
	} );

	describe( 'color', () => {
		it( 'returns the raw value for the palette color', () => {
			const theme = createTheme();
			expect( theme.color( 'primary.50' ) ).toEqual( '#f0e5fb' );
		} );

		describe( 'when the color mode is dark', () => {
			it( 'returns the raw value for the dark mode', () => {
				const theme = createTheme( { colorMode: 'dark' } );
				expect( theme.color( 'primary.300' ) ).toEqual( '#aaffee' );
			} );
		} );
	} );
} );
