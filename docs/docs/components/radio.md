import {Radio, HStack, Icon} from '@amalgama/react-native-ui-kit'
import Feather from 'react-native-vector-icons/Feather';
import CodePreview from '@site/src/components/CodePreview'
import ExampleRadio from '@site/src/components/ExampleRadio'
import ExampleRadioGroup from '@site/src/components/ExampleRadioGroup'
import {useState} from 'react'

# Radio

## Import

To add the `Radio` component to your project you can import it as follows:

```tsx
import {Radio} from '@amalgama/react-native-ui-kit'; 
```

## Standalone

### Example
<CodePreview>
	<ExampleRadio/>
</CodePreview>

```jsx
import { Radio } from '@amalgama/react-native-ui-kit';
import React, { useState } from 'react';

const ExampleRadio = () => {
	const [ isSelected, setSelected ] = useState( false );

	return (
		<Radio
			selected={ isSelected }
			onPress={ () => { setSelected( prev => !prev ); } }
		/>
	);
};
```

### Props

#### selected
If the Radio is selected or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
	<HStack>
		<Radio />
		<Radio selected />
	</HStack>
</CodePreview>

```jsx
<Radio />
<Radio selected />
```

#### disabled
If the Radio is disabled or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
	<HStack>
		<Radio disabled />
		<Radio disabled selected />
	</HStack>
</CodePreview>

```jsx
<Radio disabled />
<Radio disabled selected />
```

#### onPress
Invoked when the Radio is pressed.

| TYPE     | REQUIRED |
| -------- | -------- |
| function | No       |

<CodePreview>
	<Radio onPress={ () => { window.alert( 'The Radio was pressed!' ) } }/>
</CodePreview>

```jsx
<Radio onPress={ () => { window.alert( 'The Radio was pressed!' ) } }/>
```

#### label
Shows a label text next to the radio button icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |

<CodePreview>
	<Radio label="Radio" />
</CodePreview>

```jsx
<Radio label="Radio" />
```

#### value
If the radio is inside a `Radio.Group` this prop indicates the value for it.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |

:::caution
If the `Radio` is inside a `Radio.Group` this prop is required and will throw an `Exception` if not set.
:::

#### selectedIcon
An icon component to show when the radio is selected. The default value is the `circle-filled` icon from the `UIKitIcon` icons package.

<CodePreview>
	<Radio
		selected
		__icon={{ style: { paddingTop: '1px' } }}
		selectedIcon={<Icon as={Feather}  name="check-circle" />}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<Radio
	selected
	selectedIcon={<Icon as={Feather}  name="check-circle" />}
/>
```

#### unselectedIcon

An icon component to show when the radio is unselected. The default value is the `circle` icon from the `UIKitIcon` icons package.

<CodePreview>
	<Radio
		__icon={{ style: { paddingTop: '1px' } }}
		unselectedIcon={<Icon as={Feather}  name="circle" />}
	/>
</CodePreview>

```jsx
import Feather from 'react-native-vector-icons/Feather';

<Radio
	unselectedIcon={<Icon as={Feather}  name="circle" />}
/>
```

## RadioGroup

### Example
<CodePreview>
    <ExampleRadioGroup />
</CodePreview> 

```jsx
import React, { useState } from 'react';
import { Radio, Text, VStack } from '@amalgama/react-native-ui-kit';

const ExampleRadioGroup = () => {
	const [ value, setValue ] = useState();

	return (
		<VStack>
			<Text variant="sh1">What is your favorite coding language?</Text>
			<Radio.Group value={value} onChange={setValue}>
				<Radio value="js" label="Javascript" />
				<Radio value="ts" label="Typescript" />
				<Radio value="rb" label="Ruby" />
				<Radio value="python" label="Python" />
				<Radio value="c" label="C" />
				<Radio value="cpp" label="C++" />
			</Radio.Group>
		</VStack>
	);
};
```

### Props

#### value
A list containing the selected checkbox values.

| TYPE     | REQUIRED | DEFAULT |
| ---------| -------- | ------- |
| string[] | No       | []      |


#### onChange
Invoked when the group selection changes (because a new option was selected or a previous one was unselected) with the selected option values.

| TYPE     | REQUIRED |
| -------- | -------- |
| function | No       |

#### disabled
If the checkbox is disabled or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
	<ExampleRadioGroup disabled />
</CodePreview>

```jsx
import React, { useState } from 'react';
import { Radio, Text, VStack } from '@amalgama/react-native-ui-kit';

const ExampleRadioGroup = () => {
	const [ value, setValue ] = useState();

	return (
		<VStack>
			<Text variant="sh1">What is your favorite coding language?</Text>
			<Radio.Group disabled value={value} onChange={setValue}>
				<Radio value="js" label="Javascript" />
				<Radio value="ts" label="Typescript" />
				<Radio value="rb" label="Ruby" />
				<Radio value="python" label="Python" />
				<Radio value="c" label="C" />
				<Radio value="cpp" label="C++" />
			</Radio.Group>
		</VStack>
	);
};
```
