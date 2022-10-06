import React from 'react';
import { ThemeProvider, extendThemeConfig } from '@amalgama/embassy-ui';

import './iconFonts';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const customTheme = extendThemeConfig( {
	typography: {
		fonts: {
			// When working with google fonts the font family is the
			// same for all variants
			'Epilogue': {
				100: { normal: 'Epilogue', italic: 'Epilogue' },
				200: { normal: 'Epilogue', italic: 'Epilogue' },
				300: { normal: 'Epilogue', italic: 'Epilogue' },
				400: { normal: 'Epilogue', italic: 'Epilogue' },
				500: { normal: 'Epilogue', italic: 'Epilogue' },
				600: { normal: 'Epilogue', italic: 'Epilogue' },
				700: { normal: 'Epilogue', italic: 'Epilogue' },
				800: { normal: 'Epilogue', italic: 'Epilogue' },
				900: { normal: 'Epilogue', italic: 'Epilogue' }
			},
			'Inter': {
				100: { normal: 'Inter', italic: 'Inter' },
				200: { normal: 'Inter', italic: 'Inter' },
				300: { normal: 'Inter', italic: 'Inter' },
				400: { normal: 'Inter', italic: 'Inter' },
				500: { normal: 'Inter', italic: 'Inter' },
				600: { normal: 'Inter', italic: 'Inter' },
				700: { normal: 'Inter', italic: 'Inter' },
				800: { normal: 'Inter', italic: 'Inter' },
				900: { normal: 'Inter', italic: 'Inter' }
			}
		}
	},
	palette: {
		base: {
			hover: '#0000003D'
		}
	},
	components: {
		Icon: {
			defaultProps: {
				as: FontAwesome
			}
		},
		IconButton: {
			defaultProps: {
				color: 'black',
				rounded: 'full',
				padding: '2',
				__hovered: {
					bg: 'hover'
				}
			}
		}
	}
} as const );

const Root = ( { children }: { children: React.ReactNode } ) => (
	// Wrap the whole application in the ThemeProvider
	<ThemeProvider theme={customTheme}>{children}</ThemeProvider>
);

export default Root;
