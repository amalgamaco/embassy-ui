import {VStack, Icon, TextInput} from '@amalgama/embassy-ui'
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
import { TextInput } from '@amalgama/embassy-ui';

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
### icon
An icon to show on the right side of the input.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `JSX.Element` | No    |  `null` |

<CodePreview>
	<TextInput
		placeholder="Enter your text"
		width="300px"
		icon={<Icon as={Feather} name="search" size="xs" />}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<TextInput
	placeholder="Enter your text"
	width="300px"
	icon={<Icon as={Feather} name="search" size="xs" />}
/>
```

### onIconPress

Callback that is called when the icon is pressed.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `() => void` | No    |  `null` |

<CodePreview>
	<TextInput
		placeholder="Enter your text"
		width="300px"
		icon={<Icon as={Feather} name="search" size="xs" />}
		onIconPress={() => window.alert('Icon pressed')}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<TextInput
	placeholder="Enter your text"
	width="300px"
	icon={<Icon as={Feather} name="search" size="xs" />}
	onIconPress={() => window.alert('Icon pressed')}
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
		height="80px"
		icon={<Icon as={Feather} name="unlock" color="success.500" />}
		__icon={{ color: 'success.500', size: 'xl' }}
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Enter your password"
	type="password"
	width="300px"
	height="80px"
	icon={<Icon as={Feather} name="unlock" />}
	__icon={{ color: 'success.500', size: 'xl' }}
/>
```

:::caution 
The `__icon` prop has less priority than the `icon` prop. This means that the styles applied to the `__icon` prop will be overridden by the styles applied to the `icon` prop. For example:
:::

<CodePreview>
	<TextInput
		placeholder="Enter your password"
		type="password"
		width="300px"
		height="80px"
		icon={<Icon as={Feather} name="unlock" color="black" />}
		__icon={{ color: 'success.500', size: 'xl' }}
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Enter your password"
	type="password"
	width="300px"
	height="80px"
	icon={<Icon as={Feather} name="unlock" color="black" />}
	__icon={{ color: 'success.500', size: 'xl' }}
/>
```
As you can see the `size` from the  `__icon` prop is beign used but the `color` is being overridden by the `icon` props.