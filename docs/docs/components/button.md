import { Button, HStack, Icon } from '@amalgama/react-native-ui-kit'
import CodePreview from '@site/src/components/CodePreview';

# Button

Buttons allow user to trigger actions or events with a single tap.

## Import

To add the `Button` component to your project you can import it as follows:

```tsx
import { Button } from '@amalgama/react-native-ui-kit';
```

## Examples

<CodePreview>
	<Button
		variant="primary"
		margin="3"
		width="300px"
		onPress={() => { window && window.alert( 'Clicked!' );}}
	>
		Click!
	</Button>
</CodePreview>

```jsx
<Button variant="primary" margin="3" onPress={() => {window.alert( 'Clicked!' );}}>
	Click!
</Button>
```

## Props

### variant

The variant style to use, available values are: `primary`, `secondary`, `priority` y  `success`. You can add more variants extending the theme configuration for this component.

<CodePreview alignItems="stretch">
	<HStack space="3">
		<Button variant="primary">Primary</Button>
		<Button variant="secundary">Secundary</Button>
		<Button variant="priority">High Priority</Button>
		<Button variant="success">Success</Button>
	</HStack>
</CodePreview>

### onPress

Called when the button is pressed.

<CodePreview>
	<Button variant="primary" margin="3" width="300px" onPress={() => {window.alert( 'Clicked!' );}}>
		Click me!
	</Button>
</CodePreview>

```tsx
<Button
	variant="primary"
	onPress={() => {window.alert( 'Clicked!' );}}
	margin="3"
	width="300px"
>
	Click me!
</Button>
```

### disabled

If the button is disabled or not. Boolean. 

<CodePreview>
	<Button width="300px" variant="primary" disabled>Disabled</Button>
</CodePreview>

```tsx
<Button width="300px" variant="primary" disabled>Disabled</Button>
```

### leftIcon

An icon component to show at the left part of the button.

<CodePreview>
	<Button width="300px" variant="success" leftIcon={<Icon name="plus" />}>Add</Button>
</CodePreview>

```tsx
<Button width="300px" variant="success" leftIcon={<Icon name="plus" />}>Add</Button>
```

### rightIcon

An icon component to show at the right part of the button.

<CodePreview>
	<Button width="300px" variant="priority" rightIcon={<Icon name="close" />}>Block</Button>
</CodePreview>

```tsx
<Button width="300px" variant="priority" rightIcon={<Icon name="close" />}>Block</Button>
```

## Pseudo Props

### __label

Props to be applied to the internal `Text` component showing the label text.

| TYPE   | REQUIRED |
| ------ | -------- |
| ITextProps | No   |

### __stack 

Props to be applied to the internal `Stack` component which contains the label and the icons.

| TYPE   | REQUIRED |
| ------ | -------- |
| IStackProps | No  |

### __leftIcon

Props to be applied to the internal `Icon` component showing the left icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| IIconProps | No   |

### __rightIcon

Props to be applied to the internal `Icon` component showing the right icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| IIconProps | No   |
