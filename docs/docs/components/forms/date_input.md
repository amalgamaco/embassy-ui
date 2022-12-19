import {VStack, Icon, DateInput} from '@amalgama/embassy-ui'
import CodePreview from '@site/src/components/CodePreview'
import Feather from 'react-native-vector-icons/Feather';
import ExampleTextInput from '@site/src/components/ExampleTextInput'
import { useState } from 'react';

# DateInput

The `DateInput` component allows a user to provide a date by inputing it directly to the field or selecting it from a date picker.

## Example

<CodePreview browserOnly>
	<DateInput width="300px" />
</CodePreview>

```jsx
import { DateInput } from '@amalgama/embassy-ui';

<DateInput width="300px" />
```

## Peer Dependencies

The `DateInput` component requires different dependencies depending if it's being used in a ReactNative or ReactJS project.

### ReactNative
For ReactNative you must install the [react-native-date-picker](https://github.com/henninghall/react-native-date-picker) package for the date picker to work correctly.

```bash
yarn add react-native-date-picker
```

### ReactJS
For ReactJS you must install the [react-calendar](https://github.com/wojtekmaj/react-calendar) package for the date picker to work correctly.

```bash
yarn add react-calendar
```

## Props

Besides the props from `TextInput`, the `DateInput` has the following props:

### format
The format to be used for the date string. By default the default format for the selected `locale` will be used.  For a complete list of the format tokens you can check [here](https://date-fns.org/v2.29.3/docs/format).

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `string` | No       | The default format for the selected `locale`. |

<CodePreview browserOnly>
	<VStack space="2">
		<DateInput format="MM/dd/yyyy" width="300px" />
		<DateInput format="dd/MM/yyyy" width="300px" />
	</VStack>
</CodePreview>

```jsx
<DateInput format="MM/dd/yyyy" width="300px" />
<DateInput format="dd/MM/yyyy" width="300px" />
```

### locale
The `locale` to use. If you don't specify a `format` the default format for the specified `locale` will be used. The specified `locale` is also used to localize the date picker.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `string` | No       | `current locale` |

<CodePreview browserOnly>
	<VStack space="2">
		<DateInput locale="en-US" width="300px" />
		<DateInput locale="es-AR" width="300px" />
		<DateInput locale="fa" width="300px" />
		<DateInput locale="es-AR" format="yyyy-MM-dd" width="300px" />
	</VStack>
</CodePreview>

```jsx
<DateInput locale="en-US" width="300px" />
<DateInput locale="es-AR" width="300px" />
<DateInput locale="fa" width="300px" />
<DateInput locale="es-AR" format="yyyy-MM-dd" width="300px" />
```

### value
The date value for the input. It should respect the selected `format`.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `string` | No       |    |

<CodePreview browserOnly>
	<DateInput locale="en-US" value="12/22/2022" width="300px" />
</CodePreview>

```jsx
<DateInput locale="en-US" value="12/22/2022" width="300px" />
```

### onChange
Callback that is called when the input value changes with the new date.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `( date: string ) => void` | No       |    |

<CodePreview browserOnly>
	<DateInput width="300px" />
</CodePreview>

```jsx
const [ date, setDate ] = useState( '' );

<DateInput value={date} onChange={setDate} width="300px" />
```

### disable
Disables the input.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No    |  `false` |

<CodePreview browserOnly>
	<DateInput
		width="300px"
		disabled
	/>
</CodePreview>

```jsx
<DateInput
	width="300px"
	disabled
/>
```
### icon
An icon to show instead of the calendar one.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `JSX.Element` | No    |  `null` |

<CodePreview browserOnly>
	<DateInput
		width="300px"
		icon={<Icon as={Feather} name="calendar" size="xs" />}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<DateInput
	width="300px"
	icon={<Icon as={Feather} name="calendar" size="xs" />}
/>
```

### error
Marks the input as invalid.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No    |  `false` |

<CodePreview browserOnly>
	<DateInput
		value="33/33/3333"
		width="300px"
		error
	/>
</CodePreview>

```jsx
<DateInput
	value="33/33/3333"
	width="300px"
	error
/>
```

## Pseudo-props

### __icon
Props to be applied to the internal `IconButton` component that opens the date picker.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No       |

<CodePreview browserOnly>
	<DateInput
		width="300px"
		height="70px"
		__icon={{ color: 'success.500', size: 'md' }}
	/>
</CodePreview>

```jsx
<DateInput
	width="300px"
	height="70px"
	__icon={{ color: 'success.500', size: 'md' }}
/>
```

:::caution 
The `__icon` prop has less priority than the `icon` prop. This means that the styles applied to the `__icon` prop will be overridden by the styles applied to the `icon` prop. For example:
:::

<CodePreview browserOnly>
	<DateInput
		width="300px"
		height="80px"
		icon={<Icon as={Feather} name="search" color="black" />}
		__icon={{ color: 'success.500', size: 'md' }}
	/>
</CodePreview>

```jsx
<DateInput
	width="300px"
	height="80px"
	icon={<Icon as={Feather} name="search" color="black" />}
	__icon={{ color: 'success.500', size: 'md' }}
/>
```
As you can see the `size` from the  `__icon` prop is being used but the `color` is being overridden by the `icon` props.