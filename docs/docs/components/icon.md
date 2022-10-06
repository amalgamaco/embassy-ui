import { Icon, HStack } from '@amalgama/embassy-ui'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';
import ExampleCustomIcon from '@site/src/components/ExampleCustomIcon';

# Icon

## Import

To add the `Icon` component to your project you can import it as follows:

```tsx
import { Icon } from '@amalgama/embassy-ui';
```

## Examples

<CodePreview>
	<Icon
		size="md"
		color="black"
		rounded="full"
		name="plus"
	/>
</CodePreview>

```jsx
<Icon
	size="md"
	color="black"
	padding="2"
	rounded="full"
	name="plus"
/>
```

## Use it with react-native-vector-icons

You can use any of the icons libraries provided by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) with the `Icon` component. In order to achieve this you have to first follow the step to [install the library in your project](https://github.com/oblador/react-native-vector-icons#installation) and then choose a icon library and use it as follows:

<CodePreview>
	<Icon as={FontAwesomeIcon} name="rocket" size="md" color="information.900" />
</CodePreview>

```tsx
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

<Icon as={FontAwesomeIcon} name="rocket" size="md" color="information.900" />
```

:::info
`react-native-vector-icons` also support web platform, please refer to the [web installation guide](https://github.com/oblador/react-native-vector-icons#web-with-webpack) for more information about using it in web. You can also check [this gist](https://gist.github.com/sturmenta/246e8cb61dc891a29f8a36eceb55d529) if you are using CRA and you want to install the library without ejecting your app.
:::

## Use your own custom SVG icons

For using your own svg icons you have two options:

### 1. Create your own custom icons library

You can create your own component that functions as a proxy between the `Icon` component and your custom SVG icons. This component must support the props required to be used in the `as` prop:

- __name__: The name of the icon that you can use to identify which custom SVG icon to use.
- __size__: The size of the icon in pixels.
- __color__: The color of the icon as a CSS color value.

#### Example

<CodePreview>
	<ExampleCustomIcon/>
</CodePreview>

```tsx
import { Path, Svg } from 'react-native-svg';

// This is your custom icon using the react-native-svg library.
const AlertCircle = ( {size, color, ...props} ) => (
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
);

export default AlertCircle;
```

```tsx
import AlertCircle from './AlertCircle';

ICON_MAP = {
	'alert-circle': AlertCircle
}

// This is your custom icon lib component that uses the correct svg icon
// depending on the name prop.
const MyIconLib = ({name, ...props}) => {
	const Icon = ICON_MAP[name];
	return <Icon {...props} />
}

export default MyIconLib;
```


```tsx
import { Icon } from '@amalgama/embassy-ui';
import  MyIconLib  from './MyIconLib';

// Use it as any other icon library
<Icon as={MyIconLib} name="alert-circle" size="md" color="error.700" />
```

### 2. Pass your custom icon directly to the as property

You can you pass your custom component directly to the `as` prop. Using this form the `name` proprty is not use it since you're always returning the same icon not matter the value of that property. If you have multiple custom we __strongly__ recommend using the first option instead of this one.

```tsx
import { Path, Svg } from 'react-native-svg';
import AlertCircle from './AlertCircle';

<Icon
	as={AlertCircle}
	size="xl"
	color="black"
	name="this prop will not be used"
/>
```

:::info
If you are using `typescript` you may encounter some problems with the svg props types. Check the troubleshooting section for more information.
:::


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
	<Icon as={EvilIcons} name="like" size="md" />
</CodePreview>

```tsx
import EvilIcons from 'react-native-vector-icons/EvilIcons';

<Icon as={EvilIcons} name="like" size="md" />
```

### name
The name of the icon in the package select for the `as` prop. This prop will be passed as the `name` prop to the `as` icon component.

<CodePreview>
	<Icon as={Ionicons} name="swap-vertical-outline" size="md"/>
</CodePreview>

```tsx
import Ionicons from 'react-native-vector-icons/Ionicons';

<Icon as={Ionicons} name="swap-vertical-outline" size="md" />
```

### color

The color of the Icon. The resulting color is resolved using the current theme's configuration and passed to the `as` component.

<CodePreview>
	<Icon color="accent.900" as={Ionicons} size="md" name="umbrella-outline" />
</CodePreview>

```tsx
<Icon color="accent.900" as={Ionicons} size="md" name="umbrella-outline" />
```

### size

The size of the Icon. The available sizes are resolved using the theme configuration for the Icon component:

```js
{
	components: {
		Icon: {
			sizes: {
				'2xs': 16,
				'xs': 20,
				'sm': 24,
				'md': 32,
				'lg': 48,
				'xl': 72,
				'2xl': 96
			}
		}
	}
}
```

<CodePreview>
	<Icon size="xl" name="plus" color="black" />
</CodePreview>

```tsx
<Icon size="xl" name="plus" color="black" />
```
