import { Chip, IconButton, Icon, Button, HStack } from '@amalgama/embassy-ui'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';
import ExampleChip from '@site/src/components/ExampleChip';

# Chip

## Import

To add the `Chip` component to your project you can import it as follows:

```tsx
import { Chip } from '@amalgama/embassy-ui';
```

## Example

<CodePreview>
	<ExampleChip />
</CodePreview>

```jsx
const [ isSelected, setSelected ] = useState( false );

return (
	<Chip
		label="Chip"
		selected={isSelected}
		icon={<Icon name="earth-outline" as={Ionicons} />}
		onPress={() => setSelected( !isSelected )}
		onDeletePress={() => { window?.alert( 'Delete pressed!' ); }}
	/>
);
```

## Props

### label
The label text to show above the chip component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `string` | No       |

<CodePreview>
	<Chip label="Label text" />
</CodePreview>

```jsx
<Chip label="Label text" />
```

### icon
An icon to show at left side of the chip.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ReactElement<IIconProps>` | No       |

<CodePreview>
	<Chip
		label="Chip"
		icon={<Icon name="earth-outline" as={Ionicons} />}
	/>
</CodePreview>

```jsx
<Chip
	label="Chip"
	icon={<Icon name="earth-outline" as={Ionicons} />}
/>
```

#### selected
If the chip is selected or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No       | `false`   |

<CodePreview>
    <HStack space="3">
        <Chip label="Chip" />
        <Chip label="Chip" selected />
    </HStack>
</CodePreview>

```jsx
<Chip label="Chip" />
<Chip label="Chip" selected />
```

### onPress
A callback that is called when the chip is pressed.

| TYPE   | REQUIRED |
| ------ | -------- |
| `(): void` | No       |

<CodePreview>
	<Chip
		label="Chip"
		onPress={() => { window && window.alert( 'Chip pressed!' );}}
	/>
</CodePreview>

```jsx
<Chip
	label="Chip"
	onPress={() => { window.alert( 'Chip pressed!' );}}
/>
```

### onDeletePress
A callback that is called when the chip's delete icon is pressed. 

| TYPE   | REQUIRED |
| ------ | -------- |
| `(): void` | No       |

:::info
The delete icon is only shown when this prop is not `undefined` nor `null`.
:::

<CodePreview>
	<Chip
		label="Chip"
		onDeletePress={() => { window && window.alert( 'Delete pressed!' );}}
	/>
</CodePreview>

```jsx
<Chip
	label="Chip"
	onDeletePress={() => { window.alert( 'Delete pressed!' );}}
/>
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
	<Chip
		label="Chip"
		onDeletePress={() => { window && window.alert( 'Delete pressed!' );}}
		deleteIcon={<Icon name="trash-outline" as={Ionicons} />}
	/>
</CodePreview>

```jsx
<Chip
	label="Chip"
	onDeletePress={() => { window.alert( 'Delete pressed!' );}}
	deleteIcon={<Icon name="trash-outline" as={Ionicons} />}
/>
```

### disabled
If the chip is disabled or not. **Boolean**.

<CodePreview>
	<Chip
		label="Chip"
		icon={<Icon name="earth-outline" as={Ionicons} />}
		onPress={() => { window && window.alert( 'Pressed!' );}}
		onDeletePress={() => { window && window.alert( 'Delete pressed!' );}}
		disabled
	/>
</CodePreview>

```tsx
<IconButton size="md" name="plus" disabled />
```

## Pseudo Props

### __label

Props to be applied to the internal `text` component showing the label text.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ITextProps` | No  |

### __icon

Props to be applied to the internal `icon` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No  |

### __deleteIcon

Props to be applied to the internal delete `icon` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No  |

### __stack

Props to be applied to the internal delete `stack` component holding the left icon, the label and the delete icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |