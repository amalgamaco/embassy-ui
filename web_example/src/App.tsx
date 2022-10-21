import * as React from 'react';

import {
	ThemeProvider, Box, VStack, extendThemeConfig
} from '@amalgama/embassy-ui';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import TextExamples from './components/TextExamples';
import BoxExamples from './components/BoxExamples';
import ButtonExamples from './components/ButtonExamples';
import IconExamples from './components/IconExamples';
import IconButtonExamples from './components/IconButtonExamples';
import CheckboxExamples from './components/CheckboxExamples';
import RadioExamples from './components/RadioExamples';
import FormControlExamples from './components/FormControlExamples';
import TextInputExamples from './components/TextInputExamples';
import PaletteColorGrid from './components/PaletteColorGrid';
import ChipExamples from './components/ChipExamples';
import SwitchExamples from './components/SwitchExamples';

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
	components: {
		Text: {
			variants: {
				'headline': {
					font: 'Epilogue',
					fontSize: '3xl',
					fontWeight: 'bold',
					lineHeight: '3xl',
					letterSpacing: 'md',
					bg: 'secondary.100'
				},
				'subtitle': {
					font: 'Epilogue',
					fontSize: 'md',
					lineHeight: 'md',
					letterSpacing: 'md',
					color: 'primary.800'
				}
			}
		},
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

const App = () => (
	<ThemeProvider theme={customTheme}>
		<Box flex={1} alignItems="center">
			<VStack width="500px">
				<PaletteColorGrid />
				<TextExamples />
				<BoxExamples />
				<ButtonExamples />
				<IconExamples />
				<IconButtonExamples />
				<CheckboxExamples />
				<RadioExamples />
				<FormControlExamples />
				<TextInputExamples />
				<ChipExamples />
				<SwitchExamples />
			</VStack>
		</Box>
	</ThemeProvider>
);

export default App;
