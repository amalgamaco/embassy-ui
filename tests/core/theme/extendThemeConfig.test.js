import defaultTheme from '../../../src/core/theme/defaultTheme';
import extendThemeConfig from '../../../src/core/theme/extendThemeConfig';

describe( 'extendThemeConfig', () => {
	const customThemeConfig = {
		palette: {
			base: {
				// Overwrites primary.600
				primary: {
					600: '#FFFFFF'
				},
				// Adds a new color
				greatColor: {
					100: '#000000',
					200: '#111111',
					300: '#222222',
					400: '#333333',
					500: '#444444',
					600: '#555555',
					700: '#666666',
					800: '#777777',
					900: '#888888'
				}
			}
		},
		components: {
			Button: {
				variants: {
					// Adds new variant for button component
					awesome: {
						bg: 'accent.600',
						__label: {
							color: 'success.100'
						}
					}
				}
			}
		}
	};

	it( 'extends the default theme adding / replacing the specified definitions', () => {
		const expectedThemeConfig = {
			...defaultTheme,
			palette: {
				...defaultTheme.palette,
				base: {
					...defaultTheme.palette.base,
					primary: {
						...defaultTheme.palette.base.primary,
						600: '#FFFFFF'
					},
					greatColor: {
						100: '#000000',
						200: '#111111',
						300: '#222222',
						400: '#333333',
						500: '#444444',
						600: '#555555',
						700: '#666666',
						800: '#777777',
						900: '#888888'
					}
				}
			},
			components: {
				...defaultTheme.components,
				Button: {
					...defaultTheme.components.Button,
					variants: {
						...defaultTheme.components.Button.variants,
						awesome: {
							bg: 'accent.600',
							__label: {
								color: 'success.100'
							}
						}
					}
				}
			}
		};

		expect( extendThemeConfig( customThemeConfig ) ).toEqual( expectedThemeConfig );
	} );
} );
