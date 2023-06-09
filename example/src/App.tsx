import * as React from 'react';

import {
	SafeAreaView, ScrollView, StyleSheet,
	KeyboardAvoidingView, Platform
} from 'react-native';
import {
	ThemeProvider, VStack, extendThemeConfig, UIKitIcon, Box
} from '@amalgamaco/embassy-ui';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
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
import ColorModeToggler from './components/ColorModeToggler';
import ChipExamples from './components/ChipExamples';
import SwitchExamples from './components/SwitchExamples';
import BannerExamples from './components/BannerExamples';
import DialogExamples from './components/DialogExamples';
import ImageExamples from './components/ImageExamples';
import AvatarExamples from './components/AvatarExamples';
import CardExample from './components/CardExample';
import PasswordInputExamples from './components/PasswordExamples';
import DateInputExamples from './components/DateInputExamples';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%'
	},
	scroll: {
		flexGrow: 1,
		width: '100%'
	}
} );

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
	components: {
		Text: {
			variants: {
				'headline': {
					font: 'Epilogue',
					fontSize: '3xl',
					fontWeight: 'bold',
					lineHeight: '3xl',
					letterSpacing: 'md',
					bg: 'secondary.100',
					__dark: {
						bg: 'accent.800',
						color: 'white'
					}
				},
				'subtitle': {
					font: 'Epilogue',
					fontSize: 'md',
					lineHeight: 'md',
					letterSpacing: 'md',
					color: 'primary.800',
					__dark: {
						color: 'white'
					}
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
				as: FontAwesomeIcon,
				__dark: {
					color: 'white'
				}
			}
		},
		Banner: {
			variants: {
				custom: {
					__icon: {
						as: UIKitIcon,
						name: 'eye'
					}
				}
			}
		}
	}
} as const );

type CustomThemeConfig = typeof customTheme;

declare module '@amalgamaco/embassy-ui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomThemeConfig extends CustomThemeConfig {}
}

const App = () => (
	<ThemeProvider theme={customTheme}>
		<Box flex={1} __dark={{ bg: 'neutral.700' }}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<SafeAreaView style={styles.container}>
					<ScrollView contentContainerStyle={styles.scroll} style={{ width: '100%' }}>
						<VStack marginX="3">
							<ColorModeToggler />
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
							<PasswordInputExamples />
							<DateInputExamples />
							<ChipExamples />
							<SwitchExamples />
							<BannerExamples />
							<DialogExamples />
							<ImageExamples />
							<AvatarExamples />
							<CardExample />
						</VStack>
					</ScrollView>
				</SafeAreaView>
			</KeyboardAvoidingView>
		</Box>
	</ThemeProvider>
);

export default App;
