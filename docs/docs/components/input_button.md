import { IconButton, Button, HStack, Icon } from '@amalgama/react-native-ui-kit'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';

# IconButton

## Import

To add the `IconButton` component to your project you can import it as follows:

```tsx
import { IconButton } from '@amalgama/react-native-ui-kit';
```

## Examples

<CodePreview>
	<IconButton
		rounded="full"
		name="plus"
		bg="success.400"
		color="white"
		onPress={() => { window && window.alert( 'Clicked!' );}}
	/>
</CodePreview>

```jsx
<IconButton
	padding="2"
	rounded="full"
	bg="accent.200"
	name="plus"
	onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```

## Props

### as
The icon components family to use. See [Icon - as prop documentation](./icon.md#as) for more information.

<CodePreview>
	<IconButton
		as={Ionicons}
		name="earth-outline"
		onPress={() => { window && window.alert( 'Clicked!' );}}
	/>
</CodePreview>

```jsx
import Ionicons from 'react-native-vector-icons/Ionicons';

<IconButton
	as={Ionicons}
	name="earth-outline"
	onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```

### name
The name of the icon from the icon family selected to use. See [Icon - name prop documentation](./icon.md#name) for more information.

<CodePreview>
	<IconButton
		as={Ionicons}
		name="earth-outline"
		onPress={() => { window && window.alert( 'Clicked!' );}}
	/>
</CodePreview>

```jsx
import Ionicons from 'react-native-vector-icons/Ionicons';

<IconButton
	as={Ionicons}
	name="earth-outline"
	onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```

### size
The size of the icon button. See [Icon - size prop documentation](./icon.md#size) for more information.

<CodePreview>
	<IconButton
		name="plus"
		size="2xl"
	/>
</CodePreview>

```jsx
<IconButton
	size="md"
	name="plus"
	size="2xl"
/>
```

### color
The color for the icon. See [Icon - color prop documentation](./icon.md#color) for more information.

<CodePreview>
	<IconButton
		name="plus"
		color="success.600"
	/>
</CodePreview>

```jsx
<IconButton
	size="md"
	name="plus"
	color="success.600"
/>
```

### onPress

Called when the icon button is pressed. See [Button - onPress prop documentation](./button.md#onpress) for more information.

<CodePreview>
	<IconButton
		name="plus"
		onPress={() => { window && window.alert( 'Clicked!' );}}
	/>
</CodePreview>

```jsx
<IconButton
	name="plus"
	onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```

### disabled

If the button is disabled or not. **Boolean**.

<CodePreview>
	<IconButton size="md" name="plus" disabled />
</CodePreview>

```tsx
<IconButton size="md" name="plus" disabled />
```
