import createTheme from './createTheme';

const defaultTheme = createTheme( {
	palette: {
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
			secondary: {
				900: '#7b00db',
				800: '#aa00e2',
				700: '#c100e6',
				600: '#db00ea',
				500: '#ed00ec',
				400: '#fc00f9',
				300: '#ff01fb',
				200: '#ff7afb',
				100: '#ffb4fc',
				50: '#ffe2fe'
			},
			neutral: {
				900: '#303030',
				800: '#535353',
				700: '#737373',
				600: '#888888',
				500: '#b2b2b2',
				400: '#cfcfcf',
				300: '#eeeeee',
				200: '#f3f3f3',
				100: '#f8f8f8',
				50: '#fdfdfd'
			},
			error: {
				900: '#c0001b',
				800: '#ce0028',
				700: '#db0630',
				600: '#ed1a36',
				500: '#fc2837',
				400: '#f64352',
				300: '#eb6b74',
				200: '#f3959b',
				100: '#ffcbd3',
				50: '#ffeaef'
			},
			warning: {
				900: '#ed4403',
				800: '#F66200',
				700: '#fc7400',
				600: '#ff8400',
				500: '#ff9100',
				400: '#ffa120',
				300: '#ffb249',
				200: '#ffc97d',
				100: '#ffdeb0',
				50: '#fff2df'
			},
			success: {
				900: '#1b5e1f',
				800: '#2e7d31',
				700: '#388e3b',
				600: '#43a046',
				500: '#4caf4f',
				400: '#66bb69',
				300: '#81c784',
				200: '#a5d6a7',
				100: '#c8e6c9',
				50: '#e8f5e9'
			},
			information: {
				900: '#001aba',
				800: '#0032cb',
				700: '#003ed6',
				600: '#1749e2',
				500: '#1e52ee',
				400: '#4f6ef3',
				300: '#748af5',
				200: '#9fabf8',
				100: '#c7ccfa',
				50: '#e9ebfd'
			},
			white: '#FFFFFF',
			dark: '#121212'
		}
	},
	typography: {
		letterSpacings: {
			'xs': -0.8,
			'sm': 0.4,
			'md': 0,
			'lg': 0.4,
			'xl': 0.8,
			'2xl': 0.16
		},
		lineHeights: {
			'2xs': 16,
			'xs': 18,
			'sm': 20,
			'md': 22,
			'lg': 24,
			'xl': 28,
			'2xl': 32,
			'3xl': 40,
			'4xl': 48,
			'5xl': 64
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
			black: 900,
			extrablack: 'bolder'
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
			'4xl': 36,
			'5xl': 48,
			'6xl': 60,
			'7xl': 72,
			'8xl': 96,
			'9xl': 128
		}
	}
} );

export default defaultTheme;
