import * as React from 'react';

import {
	ThemeProvider, Box, VStack, extendThemeConfig
} from '@amalgama/react-native-ui-kit';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import TextExamples from './components/TextExamples';
import BoxExamples from './components/BoxExamples';
import ButtonExamples from './components/ButtonExamples';
import IconExamples from './components/IconExamples';
import IconButtonExamples from './components/IconButtonExamples';

const customTheme = extendThemeConfig( {
	palette: {
		base: {
			awesome: {
				50: '#ffe2ec',
				100: '#ffb3c5',
				200: '#fc839f',
				300: '#f95278',
				400: '#f62252',
				500: '#dd0939',
				600: '#ad032c',
				700: '#7c001e',
				800: '#4d0012',
				900: '#200005'
			}
		}
	},
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
		Button: {
			variants: {
				custom: {
					bg: 'accent.400',
					borderColor: 'accent.600',
					__label: {
						color: 'primary.700'
					},
					__leftIcon: {
						as: IoniconsIcon
					},
					__rightIcon: {
						as: IoniconsIcon
					}
				}
			}
		},
		Icon: {
			defaultProps: {
				as: FontAwesome
			}
		}
	}
} as const );

export default function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<Box flex={1} alignItems="center">
				<VStack width="500px">
					<TextExamples />
					<BoxExamples />
					<ButtonExamples />
					<IconExamples />
					<IconButtonExamples />
				</VStack>
			</Box>
		</ThemeProvider>
	);
}
