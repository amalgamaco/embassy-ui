---
sidebar_position: 6
---

# TypeScript


To enable TypeScript for custom theme tokens or variants, we'll follow two simple steps.
Below, in the  `extendThemeConfig` function, we're adding a new palette color, a space token and a custom variant for the Button.

```ts
import { extendThemeConfig } from '@amalgamaco/embassy-ui';

// 1. Define your custom theme
const customTheme = extendThemeConfig({
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
	space: {
		'space-2': '29px',
	},
	components: {
		Button: {
			variants: {
				awesome: {
					p: '10',
					bg: 'brand.500',
				}
			}
		}
	}
});

// 2. Get the type of the CustomTheme
type CustomThemeConfig = typeof customTheme;

// 3. Extend the internal Embassy UI Theme config
declare module '@amalgamaco/embassy-ui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomThemeConfig extends CustomThemeConfig {}
}
```