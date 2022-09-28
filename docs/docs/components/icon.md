import { Icon, HStack } from '@amalgama/react-native-ui-kit'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';
import ExampleCustomIcon from '@site/src/components/ExampleCustomIcon';

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

## How to use custom svg icons
For using your own svg icons you have two options:

1. Add your icon to the `UIKitIcon` component by a Merge Request. 

2. Use the `as` prop to pass your own component. You can use the inline way (not recommended) where you pass a function that returns your component and doesn't use the `name` prop. But it's recommended you create a custom component that uses the `name` prop to choose the desired icon from your icon's pool.

If you are using `typescript` you may encounter some problems with the svg props types. Check the troubleshooting section for more information.

<CodePreview>
	<ExampleCustomIcon/>
</CodePreview>

### Recommended way

This is a basic example of how we do it in the `UIKitIcon` component. You can use this as a base for your custom component.

```tsx
import { Path, Svg } from 'react-native-svg';

const AlertCircle = ({size, color, ...props}) => (
	<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"
				fill={color}
			/>
		</Svg>
)
export default AlertCircle;
```

```tsx
import AlertCircle from './AlertCircle';

ICON_MAP = {
	'alert-circle': AlertCircle
}

const MyIconLib = ({name, ...props}) => {
	const Icon = ICON_MAP[name];
	return <Icon {...props} />
}

export default MyIconLib;
```


```tsx
import { Icon } from '@amalgama/react-native-ui-kit';
import  MyIconLib  from './MyIconLib';

<Icon as={MyIconLib} name="alert-circle" size="xl" color="black">

```

### inline way
```tsx
import { Path, Svg } from 'react-native-svg';
import AlertCircle from './AlertCircle';


<Icon
	as={AlertCircle}
	size="xl"
	color="black"
	name="this prop will not be used"
/>


