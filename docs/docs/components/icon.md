import { Icon, HStack } from '@amalgama/react-native-ui-kit'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';

# Icon

## Import

To add the `Icon` component to your project you can import it as follows:

```tsx
import { Icon } from '@amalgama/react-native-ui-kit';
```

## Examples

<CodePreview>
	<Icon
		size="md"
		color="white"
		rounded="full"
		name="plus"
	/>
</CodePreview>

```jsx
<Icon
	size="md"
	color="white"
	padding="2"
	rounded="full"
	name="plus"
/>
```

## Props

### as
The icon library Component to be used as the base icon. The Component should comply to the following props interface:

```ts
interface AsComponentProps {
	name: string,
	size?: number | undefined,
	color?: ColorValue | number | undefined
}
```

Where:
- __name__: The name of the icon for that Icon family.
- __size__: The size of the icon in pixels.
- __color__: The color of the icon.

Here is an example using the `EvilIcons` family from the `react-native-vector-icons` library:

<CodePreview>
	<Icon as={EvilIcons} name="like" size="xl" color="white" />
</CodePreview>

```tsx
import EvilIcons from 'react-native-vector-icons/EvilIcons';

<Icon as={EvilIcons} name="like" size="xl" color="white" />
```

### name
The name of the icon in the package select for the `as` prop. This prop will be passed as the `name` prop to the `as` icon component.

<CodePreview>
	<Icon as={Ionicons} name="swap-vertical-outline" size="xl" color="white" />
</CodePreview>

```tsx
import Ionicons from 'react-native-vector-icons/Ionicons';

<Icon as={Ionicons} name="swap-vertical-outline" size="xl" color="white" />
```


### size

The size of the Icon. The available sizes are resolved using the theme configuration for the Icon component:

```js
{
	components: {
		Icon: {
			sizes: {
				'xs': 14,
				'sm': 18,
				'md': 24,
				'lg': 34,
				'xl': 48,
				'2xl': 72,
				'3xl': 96
			}
		}
	}
}
```

<CodePreview>
	<Icon size="2xl" name="plus" color="white" />
</CodePreview>

```tsx
<Icon size="2xl" name="plus" color="white" />
```

### color

The color of the Icon. The resulting color is resolved using the current theme's configuration and passed to the `as` component.

<CodePreview>
	<Icon color="accent.900" as={Ionicons} size="xl" name="umbrella-outline" />
</CodePreview>

```tsx
<Icon color="accent.900" as={Ionicons} size="xl" name="umbrella-outline" />
```