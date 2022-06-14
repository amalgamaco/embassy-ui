import Palette from '../../../src/core/palette/Palette';
import Theme from '../../../src/core/theme/Theme';
import Typography from '../../../src/core/typography/Typography';

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

const typography = new Typography( {
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
				normal: 'Font2-Regultar'
			}
		}
	}
} );

describe( 'Theme', () => {
	const createTheme = ( { colorMode = 'light' } = {} ) => (
		new Theme( {
			palette,
			typography,
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

	describe( 'typography', () => {
		const theme = createTheme();

		it( 'returns the theme\'s typography', () => {
			expect( theme.typography ).toEqual( typography );
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

	describe( 'swithcColorMode', () => {
		// eslint-disable-next-line no-undef
		pending( 'Add tests for swithcColorMode, it was tested in the hooks tests but it should be tested here aswell' );
	} );

	describe( 'styleForProps', () => {
		describe( 'for color properties', () => {
			const props = {
				color: 'primary.300',
				tintColor: 'neutral',
				backgroundColor: 'primary.100',
				bg: 'primary.900',
				bgColor: 'primary.500',
				background: 'neutral'
			};

			const expectedStyle = {
				color: {
					color: '#a066e8'
				},
				tintColor: {
					tintColor: '#000000'
				},
				backgroundColor: {
					backgroundColor: '#d7bff4'
				},
				bg: {
					backgroundColor: '#2200C1'
				},
				bgColor: {
					backgroundColor: '#7101dc'
				},
				background: {
					backgroundColor: '#000000'
				}
			};

			it( 'translate the props correctly', () => {
				const theme = createTheme();

				Object.keys( props ).forEach( ( prop ) => {
					expect( theme.styleForProps( { [ prop ]: props[ prop ] } ) ).toEqual(
						expectedStyle[ prop ]
					);
				} );
			} );

			it( 'translate the props correctly for dark color mode', () => {
				const theme = createTheme( { colorMode: 'dark' } );

				expect( theme.styleForProps( {
					color: 'primary.300',
					tintColor: 'primary.100',
					bgColor: 'neutral'
				} ) ).toEqual( {
					color: '#aaffee',
					tintColor: '#d7bff4',
					backgroundColor: '#ffffff'
				} );
			} );

			it( 'skips props that doens\'t exists', () => {
				const theme = createTheme();

				expect( theme.styleForProps( {
					color: 'primary.300',
					tintColor: 'primary.100',
					bgColor: 'neutral',
					noExisting: 'none'
				} ) ).toEqual( {
					color: '#a066e8',
					tintColor: '#d7bff4',
					backgroundColor: '#000000'
				} );
			} );

			it( 'skip props with invalid values', () => {
				const theme = createTheme();

				expect( theme.styleForProps( {
					color: 'primary.300',
					tintColor: 'primary.100',
					bgColor: 'neutral-200'
				} ) ).toEqual( {
					color: '#a066e8',
					tintColor: '#d7bff4'
				} );
			} );
		} );
	} );
} );
