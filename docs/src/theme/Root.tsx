import React from 'react';
import { ThemeProvider, extendThemeConfig } from '@amalgama/react-native-ui-kit';

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
				100: { normal: 'Inter' },
				200: { normal: 'Inter' },
				300: { normal: 'Inter' },
				400: { normal: 'Inter' },
				500: { normal: 'Inter' },
				600: { normal: 'Inter' },
				700: { normal: 'Inter' },
				800: { normal: 'Inter' },
				900: { normal: 'Inter' }
			}
		}
	},
	components: {
		Icon: {
			defaultProps: {
				as: FontAwesome
			}
		}
	}
} as const );

export default function Root( { children }: { children: any } ) {
	// Wrap the whole application in the ThemeProvider
	return (
		<ThemeProvider theme={customTheme}>{children}</ThemeProvider>
	);
}
