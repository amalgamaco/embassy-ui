---
sidebar_position: 3
---

# Customizing theme

The library provides an easy way to extend the default theme's configuration in order to customize it and adjust it to your App's Design System:

```tsx
import { extendThemeConfig, ThemeProvider } from '@amalgamaco/embassy-ui';

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
		fontSizes: {
			'xs': 10
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

const App = () => (
	<ThemeProvider theme={customTheme}>
		{...}
	</ThemeProvider>
)

export default App;
```