import { Checkbox, HStack, Icon } from '@amalgamaco/embassy-ui'
import Feather from 'react-native-vector-icons/Feather';
import CodePreview from '@site/src/components/CodePreview';
import ExampleCheckbox from '@site/src/components/ExampleCheckbox';
import ExampleCheckboxGroup from '@site/src/components/ExampleCheckboxGroup';
import { useState } from 'react'


# Checkbox

## Import

To add the `Checkbox` component to your project you can import it as follows:

```tsx
import { Checkbox } from '@amalgamaco/embassy-ui';
```

## Standalone

### Examples
<CodePreview>
    <ExampleCheckbox />
</CodePreview>

```jsx
import { Checkbox } from '@amalgamaco/embassy-ui';
import React, { useState } from 'react';

const App = () => {
	const [ isSelected, setSelected ] = useState( false );
	return (
		<Checkbox
			selected={ isSelected }
			onPress={ () => { setSelected( !isSelected ); } }
		/>
	);
};
```

### Props

#### selected
If the checkbox is selected or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No       | `false`   |

<CodePreview>
    <HStack>
        <Checkbox />
        <Checkbox selected />
    </HStack>
</CodePreview>

```jsx
<Checkbox />
<Checkbox selected />
```

#### indeterminated
If the checkbox is indeterminated or not. This is usually used for lists of checkboxes when some of their children are checked but not all of them. This is only a visual state, it only changes the checkbox icon.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No       | `false`   |

<CodePreview>
    <Checkbox indeterminated/>
</CodePreview>

```jsx
<Checkbox indeterminated />
```

#### label
Shows a label text next to the checkbox icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |

<CodePreview>
    <Checkbox label="Checkbox" />
</CodePreview>

```jsx
<Checkbox label="Checkbox" />
```

#### value
If the checkbox is inside a `Checkbox.Group` this prop indicates the value for it.

| TYPE   | REQUIRED |
| ------ | -------- |
| `string` | No       |

:::caution
If the `Checkbox` is inside a `Checkbox.Group` this prop is required and will throw an `Exception` if not set.
:::

#### disabled
If the checkbox is disabled or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No       | `false`   |

<CodePreview>
    <HStack>
        <Checkbox disabled />
        <Checkbox disabled selected />
        <Checkbox disabled indeterminated />
    </HStack>
</CodePreview>

```jsx
<Checkbox disabled />
<Checkbox disabled selected />
<Checkbox disabled indeterminated />
```

#### onPress
Invoked when the checkbox is pressed.

| TYPE     | REQUIRED |
| -------- | -------- |
| `(): void` | No       |

<CodePreview>
    <Checkbox onPress={ () => { window.alert( 'The checkbox was pressed!' ) } }/>
</CodePreview>

```jsx
<Checkbox onPress={ () => { window.alert( 'The checkbox was pressed!' ) } }/>
```

#### checkedIcon
An icon component to show when the checkbox is selected. The default value is the `box-checked` icon from the `UIKitIcon` icons package.

<CodePreview>
	<Checkbox
		selected
		checkedIcon={<Icon as={Feather}  name="x-square" />}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<Checkbox
	selected
	checkedIcon={<Icon as={Feather}  name="x-square" />}
/>
```

#### uncheckedIcon

An icon component to show when the checkbox is unselected. The default value is the `box-unchecked` icon from the `UIKitIcon` icons package.

<CodePreview>
	<Checkbox
		uncheckedIcon={<Icon as={Feather}  name="square" />}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<Checkbox
	uncheckedIcon={<Icon as={Feather}  name="square" />}
/>
```

#### indeterminatedIcon

An icon component to show when the checkbox is inditerminated. The default value is the `box-indeterminated` icon from the `UIKitIcon` icons package.

<CodePreview>
	<Checkbox
		indeterminated
		indeterminatedIcon={<Icon as={Feather}  name="minus-square" />}
	/>
</CodePreview>

```jsx
import EvilIcons from 'react-native-vector-icons/Feather';

<Checkbox
	indeterminated
	indeterminatedIcon={<Icon as={Feather}  name="minus-square" />}
/>
```

## CheckboxGroup

### Examples
<CodePreview>
    <ExampleCheckboxGroup />
</CodePreview> 

```jsx
import React, { useState } from 'react';
import { Checkbox, Text, VStack } from '@amalgamaco/embassy-ui';

const ExampleCheckboxGroup = () => {
	const [ value, setValue ] = useState( [] );

	return (
		<VStack>
			<Text variant="sh1">What are your favorite coding languages?</Text>
			<Checkbox.Group value={value} onChange={setValue}>
				<Checkbox value="js" label="Javascript" />
				<Checkbox value="ts" label="Typescript" />
				<Checkbox value="rb" label="Ruby" />
				<Checkbox value="python" label="Python" />
				<Checkbox value="c" label="C" />
				<Checkbox value="cpp" label="C++" />
			</Checkbox.Group>
		</VStack>
	);
};
```

### Props

#### value
A list containing the selected checkbox values.

| TYPE     | REQUIRED | DEFAULT |
| ---------| -------- | ------- |
| `string[]` | No       | `[]`      |


#### onChange
Invoked when the group selection changes (because a new option was selected or a previous one was unselected) with the selected option values.

| TYPE     | REQUIRED |
| -------- | -------- |
| `( selected: string[] ): void` | No       |

#### disabled
If the checkbox group is disabled or not. When it's set to true it disables all the checkboxes inside the group.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No       | `false`   |

<CodePreview>
	<ExampleCheckboxGroup disabled />
</CodePreview>

```jsx
import React, { useState } from 'react';
import { Checkbox, Text, VStack } from '@amalgamaco/embassy-ui';

const ExampleCheckboxGroup = () => {
	const [ value, setValue ] = useState( [] );

	return (
		<VStack>
			<Text variant="sh1">What are your favorite coding languages?</Text>
			<Checkbox.Group disabled value={value} onChange={setValue}>
				<Checkbox value="js" label="Javascript" />
				<Checkbox value="ts" label="Typescript" />
				<Checkbox value="rb" label="Ruby" />
				<Checkbox value="python" label="Python" />
				<Checkbox value="c" label="C" />
				<Checkbox value="cpp" label="C++" />
			</Checkbox.Group>
		</VStack>
	);
};
```

## Pseudo Props

### __icon 

Props to be applied to the internal `Icon` component showing the right icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No   |

### __iconContainer

Props to be applied to the internal `Box` component which contains the label and the icons.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |

### __label

Props to be applied to the internal `Text` component showing the label text.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ITextProps` | No   |