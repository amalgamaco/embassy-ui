import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ThemeProvider, VStack, extendThemeConfig } from '@amalgama/embassy-ui';
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
				as: FontAwesomeIcon
			}
		}
	}
} as const );

type CustomThemeConfig = typeof customTheme;

declare module '@amalgama/embassy-ui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomThemeConfig extends CustomThemeConfig {}
}

const App = () => (
	<ThemeProvider theme={customTheme}>
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll} style={{ width: '100%' }}>
				<VStack marginX="3">
					<PaletteColorGrid />
					<TextExamples />
					<BoxExamples />
					<ButtonExamples />
					<IconExamples />
					<IconButtonExamples />
					<CheckboxExamples />
					<RadioExamples/>
					<FormControlExamples />
					<TextInputExamples />
				</VStack>
			</ScrollView>
		</SafeAreaView>
	</ThemeProvider>
);

export default App;
