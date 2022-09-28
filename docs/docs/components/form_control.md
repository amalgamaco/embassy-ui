import { FormControl, HStack, TextInput } from '@amalgama/react-native-ui-kit';
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
Shows an error text below the input.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |


<CodePreview>
	<FormControl
		label="Email"
		isRequired
		error="The email address is not valid"
	>
		<TextInput value="invalid-email" width="300px" error />
	</FormControl>
</CodePreview>

```jsx
<FormControl
	label="Email"
	isRequired
	error="The email address is not valid"
>
	<TextInput placeholder="invalid-email" width="300px" error />
</FormControl>
```

:::caution
If the `hint` and `error` props are both provided, the `error` text takes precedence over the `hint` one.
:::

## Pseudo-props

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