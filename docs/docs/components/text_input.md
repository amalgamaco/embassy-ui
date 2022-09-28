import {VStack, TextInput} from '@amalgama/react-native-ui-kit'
import CodePreview from '@site/src/components/CodePreview'
import Feather from 'react-native-vector-icons/Feather';
import ExampleTextInput from '@site/src/components/ExampleTextInput'
import { useState } from 'react';

# TextInput

The `TextInput` component allows a user to provide input in a text field.

## Example

<CodePreview>
	<TextInput placeholder="Enter your text" width="300px" />
</CodePreview>

```jsx
import { TextInput } from '@amalgama/react-native-ui-kit';

<TextInput placeholder="Enter your text" width="300px" />
```

## Props

### type
The type of the input. Allowed values are:
- `text`: A text field.
- `password`: A password field that obscures the input text by default and has a icon button to show it.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `text` \| `password` | No       | `text` |

<CodePreview>
	<VStack space="2">
		<TextInput placeholder="Enter your username" width="300px" />
		<TextInput placeholder="Enter your password" type="password" width="300px" />
	</VStack>
</CodePreview>

```jsx
<TextInput placeholder="Enter your text" width="300px" />
```

### placeholder
A placeholder text for the input.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `string` | No       |    |

<CodePreview>
	<TextInput placeholder="Enter your text" width="300px" />
</CodePreview>

```jsx
<TextInput placeholder="Enter your text" width="300px" />
```

### value
The value for the input.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `string` | No       |    |

<CodePreview>
	<TextInput
		placeholder="Enter your email"
		value="test@amalgama.co"
		width="300px"
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Enter your email"
	value="test@amalgama.co"
	width="300px"
/>
```

### onChangeText
Callback that is called when the input text changes with the new text.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `( text: string ) => void` | No       |    |

<CodePreview>
	<ExampleTextInput />
</CodePreview>

```jsx
const [ text, setText ] = useState( '' );

<TextInput
	placeholder="Enter your email"
	value={text}
	onChangeText={setText}
	width="300px"
/>
```

### onChange
Callback that is called when the input text changes with the change event.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `( { eventCount: number, target: any, text: string } ) => void` | No       |    |

<CodePreview>
	<ExampleTextInput />
</CodePreview>

```jsx
const [ text, setText ] = useState( '' );

<TextInput
	placeholder="Enter your email"
	value={text}
	onChange={( { text } ) => setText( text )}
	width="300px"
/>
```

### disable
Disables the input.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No    |  `false` |

<CodePreview>
	<TextInput
		value="This input is disabled"
		width="300px"
		disabled
	/>
</CodePreview>

```jsx
<TextInput
	value="This input is disabled"
	width="300px"
	disabled
/>
```

### error
Marks the input as invalid.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No    |  `false` |

<CodePreview>
	<TextInput
		value="This is an invalid input"
		width="300px"
		error
	/>
</CodePreview>

```jsx
<TextInput
	value="This is an invalid input"
	width="300px"
	error
/>
```

## Pseudo-props

### __textInput
Props to be applied to the internal `TextInput` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No       |

<CodePreview>
	<TextInput
		placeholder="Enter your name"
		width="300px"
		__textInput={{ color: 'success.800' }}
		__focused={{ __textInput: { color: 'error.900' } }}
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Enter your name"
	width="300px"
	__textInput={{ color: 'success.800' }}
	__focused={{ __textInput: { color: 'error.900' } }}
/>
```

### __icon
Props to be applied to the internal `IconButton` component that toggles the password visibility.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No       |

<CodePreview>
	<TextInput
		placeholder="Enter your password"
		type="password"
		width="300px"
		__icon={{ name: 'lock', as: Feather, size: 'sm' }}
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Enter your password"
	type="password"
	width="300px"
	__icon={{ name: 'lock', as: Feather, size: 'sm' }}
/>
```