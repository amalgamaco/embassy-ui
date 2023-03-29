import { FormControl, Checkbox, Radio, HStack, TextInput, Icon, UIKitIcon  } from '@amalgamaco/embassy-ui';
import CodePreview from '@site/src/components/CodePreview';

# FormControl
The `FormControl` component is used to wrap form inputs (suchs as `TextInput`, `Select`, etc.) handling the label text, hint text and error text for them.

## Example

<CodePreview>
	<FormControl
		label="Email"
		isRequired
		hint="Remember to enter a valid email address"
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>


```jsx
<FormControl
	label="Email"
	isRequired
	hint="Remember to enter a valid email address"
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

## Props

### label
The label text to show above the input component.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |


<CodePreview>
	<FormControl
		label="Email"
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

### isRequired
Shows an indicator for required input.

| TYPE   | REQUIRED |  DEFAULT |
| ------ | -------- | -------- |
| string | No       | false    |


<CodePreview>
	<FormControl
		label="Email"
		isRequired
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	isRequired
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

:::caution
The required indicator won't be shown unless a label text is provided even if `isRequired` is set to `true`.
:::

### showInfoIcon
Shows an info icon on the form label.

| TYPE   | REQUIRED |  DEFAULT |
| ------ | -------- | -------- |
| string | No       | false    |

<CodePreview>
	<FormControl
		label="Email"
		showInfoIcon
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	showInfoIcon
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

:::caution
The info icon won't be shown unless a label text is provided.
:::

### infoIcon
Provides an icon to show as an info icon.

| TYPE         | REQUIRED |
| ------------ | -------- |
| IconButton   | No       |

<CodePreview>
	<FormControl
		label="Email"
		showInfoIcon
		infoIcon={<Icon as={UIKitIcon} name="question-circle"/>}
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	showInfoIcon
	infoIcon={<Icon as={UIKitIcon} name="question-circle"/>}
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

:::info
`question-circle` icon provided by `UIKitIcon` component is the default icon.
:::

### onInfoIconPress
Callback function to be called when the info icon is pressed.

| TYPE     | REQUIRED |
| -------- | -------- |
| function | No       |

<CodePreview>
	<FormControl
		label="Email"
		showInfoIcon
		onInfoIconPress={() => window.alert('Info icon clicked')}
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	showInfoIcon
	onInfoIconPress={() => window.alert('Info icon pressed')}
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

### onInfoIconHoverIn
Callback function to be called when the info icon is hovered.

| TYPE     | REQUIRED |
| -------- | -------- |
| function | No       |


<CodePreview>
	<FormControl
		label="Email"
		showInfoIcon
		onInfoIconHoverIn={() => window.alert('Info icon hovered')}
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	showInfoIcon
	onInfoIconHoverIn={() => window.alert('Info icon hovered')}
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

### onInfoIconHoverOut
Callback function to be called when the info icon is hovered out.

| TYPE     | REQUIRED |
| -------- | -------- |
| function | No       |

<CodePreview>
	<FormControl
		label="Email"
		showInfoIcon
		onInfoIconHoverOut={() => window.alert('Info icon hovered out')}
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	showInfoIcon
	onInfoIconHoverOut={() => window.alert('Info icon hovered out')}
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

### hint
Shows a hint text below the input.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |


<CodePreview>
	<FormControl
		label="Email"
		isRequired
		hint="Remember to enter a valid email address"
	>
		<TextInput placeholder="Email address" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	isRequired
	hint="Remember to enter a valid email address"
>
	<TextInput placeholder="Email address" width="300px" />
</FormControl>
```

:::caution
If the `hint` and `error` props are both provided, the `error` text takes precedence over the `hint` one. 
:::

### error
Shows an error text below the input. This value is also provided to the children through the `FormControlContext`.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |


<CodePreview>
	<FormControl
		label="Email"
		isRequired
		error="The email address is not valid"
	>
		<TextInput value="invalid-email" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	isRequired
	error="The email address is not valid"
>
	<TextInput value="invalid-email" width="300px" />
</FormControl>
```

:::caution
If the `hint` and `error` props are both provided, the `error` text takes precedence over the `hint` one.
:::

### disabled
Disables the form control. This value is also provided to the children through the `FormControlContext`.

| TYPE   | REQUIRED | DEFAULT |
| ------ | -------- | ---- |
| boolean | No       | false |

#### With a TextInput
<CodePreview>
	<FormControl
		label="Email"
		isRequired
		hint="Remember to enter a valid email address"
		disabled
	>
		<TextInput value="invalid-email" width="300px" />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	isRequired
	error="The email address is not valid"
>
	<TextInput value="invalid-email" width="300px" />
</FormControl>
```

#### With a CheckboxGroup
<CodePreview>
	<FormControl
		label="Which are your favorite coding languages?"
		isRequired
		hint="You can select multiple options"
		disabled
	>
		<Checkbox.Group>
			<Checkbox value="js" label="Javascript" />
			<Checkbox value="rb" label="Ruby" />
			<Checkbox value="py" label="Python" />
		</Checkbox.Group>
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Which are your favorite coding languages?"
	isRequired
	hint="You can select multiple options"
	disabled
>
	<Checkbox.Group>
		<Checkbox value="js" label="Javascript" />
		<Checkbox value="rb" label="Ruby" />
		<Checkbox value="py" label="Python" />
	</Checkbox.Group>
</FormControl>
```

#### With a RadioGroup
<CodePreview>
	<FormControl
		label="Which is your favorite coding language?"
		isRequired
		hint="You can select only one option"
		disabled 
	>
		<Radio.Group>
			<Radio value="js" label="Javascript" />
			<Radio value="rb" label="Ruby" />
			<Radio value="py" label="Python" />
		</Radio.Group>
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Which is your favorite coding language?"
	isRequired
	hint="You can select only one option"
	disabled
>
	<Radio.Group>
		<Radio value="js" label="Javascript" />
		<Radio value="rb" label="Ruby" />
		<Radio value="py" label="Python" />
	</Radio.Group>
</FormControl>
```

## Pseudo Props

### __label
Props to be applied to the internal `Text` component showing the label.

| TYPE   | REQUIRED |
| ------ | -------- |
| ITextProps | No       |

### __required
Props to be applied to the internal `Text` component showing the required indicator.

| TYPE   | REQUIRED |
| ------ | -------- |
| ITextProps | No       |

### __infoIcon
Props to be applied to the internal `IconButton` component showing the info icon.

| TYPE             | REQUIRED |
| ---------------- | -------- |
| IIconButtonProps | No       |

### __hintText
Props to be applied to the internal `Text` component showing the hint text.

| TYPE   | REQUIRED |
| ------ | -------- |
| ITextProps | No       |

### __errorText
Props to be applied to the internal `Text` component showing the error text.

| TYPE   | REQUIRED |
| ------ | -------- |
| ITextProps | No       |

### __errorIcon
Props to be applied to the internal `Icon` component showing the error icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| IIconProps | No       |