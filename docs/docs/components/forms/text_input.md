import {VStack, Icon, TextInput} from '@amalgamaco/embassy-ui'
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
import { TextInput } from '@amalgamaco/embassy-ui';

<TextInput placeholder="Enter your text" width="300px" />
```

## Props

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



### placeholderTextColor
The color for the placeholder text.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| [PaletteColor](../../theming/default_theme#palette) | No       |    |

<CodePreview>
	<TextInput
		placeholder="Enter your text"
		placeholderTextColor="success.800"
		width="300px"
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Enter your text"
	placeholderTextColor="success.800"
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
Props to be applied to the internal `IconButton` component that is shown when the `icon` prop is set.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No       |

<CodePreview>
	<TextInput
		placeholder="Search"
		width="300px"
		height="60px"
		icon={<Icon as={Feather} name="search" />}
		__icon={{ color: 'success.500', size: 'md' }}
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Search"
	width="300px"
	height="60px"
	icon={<Icon as={Feather} name="search" />}
	__icon={{ color: 'success.500', size: 'md' }}
/>
```

:::caution 
The `__icon` prop has less priority than the `icon` prop. This means that the styles applied to the `__icon` prop will be overridden by the styles applied to the `icon` prop. For example:
:::

<CodePreview>
	<TextInput
		placeholder="Search"
		width="300px"
		height="60px"
		icon={<Icon as={Feather} name="search" color="black" />}
		__icon={{ color: 'success.500', size: 'md' }}
	/>
</CodePreview>

```jsx
<TextInput
	placeholder="Search"
	width="300px"
	height="60px"
	icon={<Icon as={Feather} name="search" color="black" />}
	__icon={{ color: 'success.500', size: 'md' }}
/>
```
As you can see the `size` from the  `__icon` prop is being used but the `color` is being overridden by the `icon` props.