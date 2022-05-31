import Components from '../../../src/core/components/Components';
import Layout from '../../../src/core/layout/Layout';
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
			},
			600: {
				normal: 'Font1-SemiBold',
				italic: 'Font1-SemiBoldItalic'
			}
		},
		'Font2': {
			400: {
				normal: 'Font2-Regultar'
			}
		}
	}
} );

const layout = new Layout( {
	borderWidths: {
		'0': 0,
		'1': '1px',
		'2': '2px',
		'4': '4px',
		'8': '8px'
	},
	spacings: {
		'0': 0,
		'0.5': 2,
		'1': 4,
		'1.5': 6,
		'2': 8,
		'2.5': 10,
		'3': 12,
		'3.5': 14,
		'4': 16,
		'5': 20,
		'6': 24,
		'7': 28,
		'8': 32,
		'9': 36,
		'10': 40
	},
	sizes: {
		'3xs': 224,
		'2xs': 256,
		'xs': 320,
		'sm': 384,
		'md': 448,
		'lg': 512,
		'xl': 576,
		'2xl': 672
	},
	radius: {
		'none': 0,
		'xs': 2,
		'sm': 4,
		'md': 6,
		'lg': 8,
		'xl': 12,
		'2xl': 16,
		'3xl': 24,
		'full': 9999
	}
} );

const components = new Components( {
	Text: {
		defaultProps: {
			fontSize: 'xl',
			lineHeight: 'md',
			fontWeight: 'normal'
		},
		variants: {
			'h1': {
				fontSize: '4xl',
				lineHeight: '2xl',
				fontWeight: 'bold'
			},
			'body': {
				fontSize: '2xl',
				lineHeight: 'md',
				fontWeight: 'normal'
			}
		}
	}
} );

describe( 'Theme', () => {
	const createTheme = ( { colorMode = 'light' } = {} ) => (
		new Theme( {
			palette,
			typography,
			layout,
			components,
			colorMode
		} )
	);

	describe( 'constructor', () => {
		it( 'by default sets the color mode to light', () => {
			const theme = new Theme( { palette, typography, components } );
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

		it( 'returns the theme\'s typography config', () => {
			expect( theme.typography ).toEqual( typography );
		} );
	} );

	describe( 'layout', () => {
		const theme = createTheme();

		it( 'returns the theme\'s layout config', () => {
			expect( theme.layout ).toEqual( layout );
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

	describe( 'defaultPropsFor', () => {
		it( 'returns the default props for the given component', () => {
			const theme = createTheme();
			expect( theme.defaultPropsFor( 'Text' ) ).toEqual( components.config.Text?.defaultProps );
		} );
	} );

	describe( 'variantPropsFor', () => {
		it( 'returns the props for the given component variant', () => {
			const theme = createTheme();
			expect( theme.variantPropsFor( 'Text', 'h1' ) ).toEqual( components.config.Text?.variants?.h1 );
		} );
	} );

	describe( 'config', () => {
		const theme = createTheme();

		it( 'returns the theme\'s config', () => {
			expect( theme.config ).toEqual( {
				colorMode: theme.colorMode,
				palette: theme.palette.config,
				layout: theme.layout.config,
				components: theme.components.config,
				typography: theme.typography.config
			} );
		} );
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

		describe( 'for typography properties', () => {
			const theme = createTheme();

			describe( 'font', () => {
				it( 'returns the correct font with default fontWeight and fontStyle when there are not specified', () => {
					const props = { font: 'Font1' };

					expect( theme.styleForProps( props ) ).toEqual( {
						fontFamily: 'Font1-Regular'
					} );
				} );

				it( 'returns the correct font when specifing fontWeight and fontStyle', () => {
					const props = { font: 'Font1', fontWeight: 'semibold', fontStyle: 'italic' };

					expect( theme.styleForProps( props ) ).toEqual( {
						fontFamily: 'Font1-SemiBoldItalic',
						fontWeight: '600',
						fontStyle: 'italic'
					} );
				} );

				it( 'returns the correct font when specifing only fontWeight', () => {
					const props = { font: 'Font1', fontWeight: 'medium' };

					expect( theme.styleForProps( props ) ).toEqual( {
						fontFamily: 'Font1-Bold',
						fontWeight: '500'
					} );
				} );

				it( 'returns the correct font when specifing only fontStyle', () => {
					const props = { font: 'Font1', fontStyle: 'italic' };

					expect( theme.styleForProps( props ) ).toEqual( {
						fontFamily: 'Font1-RegularItalic',
						fontStyle: 'italic'
					} );
				} );
			} );

			describe( 'fontSize', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { fontSize: 'lg' } ) ).toEqual(
						{ fontSize: 18 }
					);
				} );
			} );

			describe( 'fontWeight', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { fontWeight: 'bold' } ) ).toEqual(
						{ fontWeight: '700' }
					);
				} );
			} );

			describe( 'letterSpacing', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { letterSpacing: 'xs' } ) ).toEqual(
						{ letterSpacing: -0.8 }
					);
				} );
			} );

			describe( 'lineHeight', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { lineHeight: 'xl' } ) ).toEqual(
						{ lineHeight: 28 }
					);
				} );
			} );

			describe( 'textAlign', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { textAlign: 'center' } ) ).toEqual(
						{ textAlign: 'center' }
					);
				} );
			} );

			describe( 'fontStyle', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { fontStyle: 'italic' } ) ).toEqual(
						{ fontStyle: 'italic' }
					);
				} );
			} );

			describe( 'textTransform', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { textTransform: 'uppercase' } ) ).toEqual(
						{ textTransform: 'uppercase' }
					);
				} );
			} );

			describe( 'textDecoration', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { textDecoration: 'underline' } ) ).toEqual(
						{ textDecorationLine: 'underline' }
					);
				} );
			} );

			describe( 'txtDecor', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { txtDecor: 'underline' } ) ).toEqual(
						{ textDecorationLine: 'underline' }
					);
				} );
			} );

			describe( 'textDecorationLine', () => {
				it( 'returns the correct value', () => {
					expect( theme.styleForProps( { textDecorationLine: 'underline' } ) ).toEqual(
						{ textDecorationLine: 'underline' }
					);
				} );
			} );
		} );
	} );
} );
