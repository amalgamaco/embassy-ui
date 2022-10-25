---
sidebar_position: 1
---

# Theme

The theme defines your application's color palette, typography, scales, sizes, radius and more.

## Palette

The color palette of your application is defined by the `palette` configuration in your theme's config object.

In this configuration you can set the colors used by all color modes (`base`), the colors only for the __light__ color mode (`light`) and the colors only for the __dark__ color mode(`dark`).

Inside any of this categories you define the palette colors available as a two level object, first level by color name and for that color a palette range with the actual values.

```ts
const themeConfig = {
	palette: {
		base: {
			'primary': {
				900: '#01164D',
				800: '#0D2663',
				700: '#162F6F',
				600: '#1F387A',
				500: '#253E82',
				400: '#475993',
				300: '#6675A4',
				200: '#909BBE',
				100: '#BCC2D8',
				50: '#E4E7EF'
			},
			'text-primary': 'primary.900'
		},
		dark: {
			'primary': {
				900: '#4F80FF',
				800: '#618DFF',
				700: '#7299FF',
				600: '#84A6FF',
				500: '#95B3FF',
				400: '#A7C0FF',
				300: '#B9CCFF',
				200: '#CAD9FF',
				100: '#DCE6FF',
				50: '#EDF2FF'
			}
		}
	}
}
```

In this example we define the `primary` color with a palette range from `50` to `900`. Then we also define that for a `dark` color mode the `primary` palette range will have different values (for example for a `primary.900` color we have a value of `#01164D` for the `light` color mode and a value of `#4F80FF` for the `dark` color mode).

As you can see in the example you can also define aliases for the colors in your palette, for example `text-primary` will always resolve to the value set to the `primary.900` color.

The values defined for the theme's palette will be used to translate the [Palette Style Props](./style_props.md#palette).

## Typography

You can define your typography options using the following keys:

- __fonts__
- __fontSizes__
- __fontWeights__
- __lineHeights__
- __letterSpacings__

### Fonts (fonts)
The `fonts` key defines the font families available in the app. You define the fonts as a three level nested object where:
- first level is the name alias of the font (how you will reference the font with the `font` prop).
- second level is the weight of the font (you can set different font families for different font weights)
- third level is the style of the font (`normal` or `italic`).

For example for the `Epilogue` font you could have something like this:

```ts
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
	}
}
```

Then if you pass to the [Text component](../components/typography/text.md) the following props:

```tsx
<Text font="Epilogue" fontStyle="Italic" fontWeight="bold">
```

The font family used is going to be `Epilogue-BoldItalic` as defined in the example config.

:::caution
For __WEB__ the only font that is used is the one specified for `400` weight and `normal` style.
:::


### Font Sizes (fontSizes)
The key `fontSizes` defines the aliases for the different font sizes available.

### Font Weights (fontWeights)
The key `fontWeights` defines the aliases for the different font weights available.

### Line Heights (lineHeights)
The key `lineHeights` defines the aliases for the different line heights available.

### Letter Spacings (letterSpacings)
The key `letterSpacings` defines the aliases for the different font letterSpacings.

### Full Example

```ts
const themeConfig = {
	typography:  {
		letterSpacings: {
			'xs': -0.4,
			'sm': 0,
			'md': 0.1,
			'lg': 0.15,
			'xl': 0.18,
			'2xl': 0.25
		},
		lineHeights: {
			'xs': 16,
			'sm': 19,
			'md': 20,
			'lg': 24,
			'xl': 28,
			'2xl': 32,
			'3xl': 42,
			'4xl': 48,
			'5xl': 64
		},
		fontWeights: {
			hairline: '100',
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900'
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
			'4xl': 34,
			'5xl': 48,
			'6xl': 60,
			'7xl': 72,
			'8xl': 96,
			'9xl': 128
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
		}
	}
}
```

## Layout

You can define your layout options using the following keys:

- __borderWidths__
- __sizes__
- __spacings__
- __radius__

### Border Widths (borderWidths)
The key `borderWidths` defines the aliases for the different border widths available.

### Sizes (sizes)
The key `sizes` defines the aliases for the different sizes available.

### Spacings (spacings)
The key `spacings` defines the aliases for the different spacings available.

### Border Radius (radius)
The key `radius` defines the aliases for the different border radius available.

### Full Example

```ts
const themeConfig = {
	layout:  {
		borderWidths: {
			'none': 0,
			'2xs': 0.5,
			'xs': 1,
			'sm': 2,
			'md': 3,
			'lg': 4,
			'xl': 5,
			'2xl': 6,
			'3xl': 7,
			'4xl': 8
		},
		spacings: {
			'0': 0,
			'0.5': 2,
			'1': 4,
			'1.5': 6,
			'2': 8,
			'2.5': 10,
			'3': 12,
			'3.5': 14,
			'4': 16,
			'5': 20,
			'6': 24,
			'7': 28,
			'8': 32,
			'9': 36,
			'10': 40,
			'12': 48,
			'16': 64,
			'20': 80,
			'24': 96,
			'32': 128,
			'40': 160,
			'48': 192,
			'56': 224,
			'64': 256,
			'72': 288,
			'80': 320,
			'96': 384,
			'1/2': '50%',
			'1/3': '33.333%',
			'2/3': '66.666%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666%',
			'2/6': '33.333%',
			'3/6': '50%',
			'4/6': '66.666%',
			'5/6': '83.333%',
			'full': '100%'
		},
		sizes: {
			'3xs': 224,
			'2xs': 256,
			'xs': 320,
			'sm': 384,
			'md': 448,
			'lg': 512,
			'xl': 576,
			'2xl': 672
		},
		radius: {
			'none': 0,
			'xs': 2,
			'sm': 4,
			'md': 6,
			'lg': 8,
			'xl': 12,
			'2xl': 16,
			'3xl': 24,
			'full': 9999
		}
	}
};
```

## Components

You can configure each of the components available in this UI Kit using the following keys:

- __defaultProps__
- __variants__
- __sizes__

### Default Props (defaultProps)

These are the Style Props that will be applied by default to the component. You can also include pseudo-props in the component's default props.

```ts
{
	Button: {
		defaultProps: {
			flex: 1,
			bg: 'white',
			borderColor: 'black',
			borderWidth: '2',
			rounded: '2xl',
			padding: '3.5',
			width: '100%',
			__stack: {
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center'
			},
			__label: {
				color: 'black',
				mx: 2,
				textAlign: 'center' as const
			},
			__leftIcon: {
				size: 'sm'
			},
			__rightIcon: {
				size: 'sm'
			},
			__disabled: {
				opacity: 0.7
			},
			__pressed: {
				opacity: 0.7
			}
		}
	}
}
```

### Variants (variants)

With `variants` you can create different styles for your components. Variants are groups of props (and pseudo-props) with specific values. Creating variants is really simple, you define them inside the `variants` key for the component with the name you want that style to be called and then you add the style props with the values for that style.

```ts
{
	Button: {
		variants: {
			primary: {
				bg: 'primary.900',
				borderColor: 'primary.900',
				__label: {
					color: 'white',
					fontWeight: 'bold',
					fontSize: 'sm',
					lineHeight: 'sm'
				},
				__leftIcon: {
					color: 'white'
				},
				__rightIcon: {
					color: 'white'
				},
				__pressed: {
					opacity: 1,
					bg: 'primary.800',
					borderColor: 'primary.800'
				},
				__disabled: {
					opacity: 1,
					bg: 'primary.400',
					borderColor: 'primary.400'
				}
			},
			secondary: {
				bg: 'white',
				borderWidth: '2',
				borderColor: 'primary.900',
				__label: {
					color: 'primary.900',
					fontWeight: 'bold',
					fontSize: 'sm',
					lineHeight: 'sm'
				},
				__leftIcon: {
					color: 'primary.900'
				},
				__rightIcon: {
					color: 'primary.900'
				},
				__pressed: {
					opacity: 1,
					bg: 'primary.10'
				},
				__disabled: {
					opacity: 1,
					bg: 'white',
					borderColor: 'primary.400',
					__label: {
						color: 'primary.400'
					},
					__leftIcon: {
						color: 'primary.400'
					},
					__rightIcon: {
						color: 'primary.400'
					}
				}
			},
			...
		}
	}
}
```

Then you can use the variant through the `variant` prop in your component:

```tsx
<Button variant="secondary">
```