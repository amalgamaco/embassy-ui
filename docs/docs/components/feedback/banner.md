import { Banner, IconButton, Icon, Button, HStack, VStack } from '@amalgamaco/embassy-ui'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';
import ExampleBanner from '@site/src/components/ExampleBanner';

# Banner

## Import

To add the `Banner` component to your project you can import it as follows:

```tsx
import { Banner } from '@amalgamaco/embassy-ui';
```

## Example

<CodePreview>
	<ExampleBanner />
</CodePreview>

```jsx
<Banner
	variant={'success'}
	onDeletePress={() => { window.alert( 'Delete pressed!' );}}
>
	Banner success text
</Banner>
```

## Props

### icon
An icon to show on the left side of the banner.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ReactElement<IIconProps>` | No       |

<CodePreview>
	<Banner variant='success' width='80%' icon={<Icon name="earth-outline" as={Ionicons} />}>
		Banner text
	</Banner>
</CodePreview>

```jsx
<Banner
	variant='success'
	icon={<Icon name="earth-outline" as={Ionicons} />}
>
	Banner text
</Banner>
```

### variant
The variant style to use. You can add more variants extending the theme configuration for this component.

The available variants are:

- `error`
- `success`
- `warning`
- `information`

<CodePreview>

<Banner variant='error' width='80%' marginBottom={5} onDeletePress={() => { window.alert( 'Delete pressed!' );}}>
	Error text
</Banner>

<Banner variant='success' width='80%' marginBottom={5} onDeletePress={() => { window.alert( 'Delete pressed!' );}}>
	Success text
</Banner>

<Banner variant='warning' width='80%' marginBottom={5} onDeletePress={() => { window.alert( 'Delete pressed!' );}}>
	Warning text
</Banner>

<Banner variant='information' width='80%' onDeletePress={() => { window.alert( 'Delete pressed!' );}}>
	Information text
</Banner>

</CodePreview>

```jsx
<Banner variant='error'>
	Error text
</Banner>

<Banner variant='success'>
	Success text
</Banner>

<Banner variant='warning'>
	Warning text
</Banner>

<Banner variant='information'>
	Information text
</Banner>
```

:::info
Remember that you can define a new variant and define the default icon for that variant extending the default theme's configuration.
:::

```tsx
const customTheme = extendThemeConfig( {
	components: {
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
```

```tsx
<Banner variant='custom'>
	Custom variant
</Banner>
```

### onDeletePress
A callback that is called when the banner's delete icon is pressed.

| TYPE   | REQUIRED |
| ------ | -------- |
| `(): void` | No       |

:::info
The delete icon is only shown when this prop is not `undefined` nor `null`.
:::

<CodePreview>
	<Banner
		width='80%'
		variant='warning'
		onDeletePress={() => { alert( 'Delete pressed!' );}}
	>
		Banner
	</Banner>
</CodePreview>

```jsx
<Banner
	variant='warning'
	onDeletePress={() => { alert( 'Delete pressed!' );}}
>
	Banner
</Banner>
```

### deleteIcon
The icon used as the delete icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ReactElement<IIconProps>` | No       |

:::info
Remember that the delete icon is only shown when the `onDeletePress` prop is not `undefined` nor `null`.
:::

<CodePreview>
	<Banner
		width='80%'
		variant="error"
		onDeletePress={() => { alert( 'Custom delete icon pressed!' );}}
		deleteIcon={<Icon name="trash-outline" as={Ionicons} />}
	>
		Banner
	</Banner>
</CodePreview>

```jsx
<Banner
	variant="error"
	onDeletePress={() => { alert( 'Custom delete icon pressed!' );}}
	deleteIcon={<Icon name="trash-outline" as={Ionicons} />}
>
	Banner
</Banner>
```

### visible
If the banner is visible or not.

| TYPE    | REQUIRED | DEFAULT |
|---------| -------- |---------|
| `Boolean` | No       | true    |

<CodePreview>
	<Banner variant='success' width='80%'>
		Banner text
	</Banner>
</CodePreview>

```tsx
<Banner variant='success' visible>
	Banner text
</Banner>

<Banner variant='success' visible={false}>
	Banner text
</Banner>
```

### withIcon
If the icon is visible or not.

| TYPE    | REQUIRED | DEFAULT |
|---------| -------- |---------|
| `Boolean` | No     | true    |

<CodePreview>
	<Banner variant='success' width='80%' withIcon>
		Banner text
	</Banner>
</CodePreview>

```tsx
<Banner variant='success' withIcon >
	Banner text
</Banner>
```

<CodePreview>
	<Banner variant='success' width='80%' withIcon={false}>
		Banner text
	</Banner>
</CodePreview>

```tsx

<Banner variant='success' withIcon={false}>
	Banner text
</Banner>
```

:::info
The icon is only shown when the variant prop is a valid variant, a custom variant with a default icon, or when an icon prop is provided and this prop is not `false`.
:::

## Pseudo Props

### __label

Props to be applied to the internal `text` component showing the label text.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ITextProps` | No  |

<CodePreview>
	<Banner
		variant='success'
		borderRadius={'lg'}
		width='80%'
		__label={{ color:'warning.700'}}
		onDeletePress={() => { window.alert( 'Delete pressed!' );}}
	>
		Banner text
	</Banner>
</CodePreview>

```tsx
<Banner
	variant='success'
	borderRadius={'lg'}
	width='80%'
	__label={{ color:'warning.700'}}
	onDeletePress={() => { window.alert( 'Delete pressed!' );}}
>
	Banner text
</Banner>
```

### __labelContainer

Props to be applied to the internal `stack` component that contains the label.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |

### __icon

Props to be applied to the internal `icon` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No  |

<CodePreview>
	<Banner
		variant='success'
		width='80%'
		__icon={{ color:'error.500'}}
	>
		Banner text
	</Banner>
</CodePreview>

```tsx
<Banner
	variant='success'
	width='80%'
	__icon={{ color:'error.500'}}
>
	Banner text
</Banner>
```

### __deleteIcon

Props to be applied to the internal delete `icon` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No  |

<CodePreview>
	<Banner
		variant='success'
		borderRadius={'lg'}
		width='80%'
		__deleteIcon={{ color:'error.500'}}
		onDeletePress={() => { window.alert( 'Delete pressed!' );}}
	>
		Banner text
	</Banner>
</CodePreview>

```tsx
<Banner
	variant='success'
	borderRadius={'lg'}
	width='80%'
	__deleteIcon={{ color:'error.500'}}
	onDeletePress={() => { window.alert( 'Delete pressed!' );}}
>
	Banner text
</Banner>
```
