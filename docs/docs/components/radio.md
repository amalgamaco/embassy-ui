import {Radio, HStack} from '@amalgama/react-native-ui-kit'
import {UIKitIcon} from '@amalgama/react-native-ui-kit/'
import CodePreview from '@site/src/components/CodePreview'
import ExampleRadio from '@site/src/components/ExampleRadio'
import {useState} from 'react'

# Radio

## Import

To add the `Radio` component to your project you can import it as follows:

```tsx
import {Radio} from '@amalgama/react-native-ui-kit'; 
```

## Examples
<CodePreview>
	<ExampleRadio/>
</CodePreview>

## Props

### selected
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

### disabled
If the Radio is disabled or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
	<HStack>
		<Radio disabled />
		<Radio selected disabled />
	</HStack>
</CodePreview>


### onPress
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

### label
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

### selectedIcon
An icon component to show when the radio is selected. The default value is the `circle-filled` icon from the `UIKitIcon` icons package.

```jsx
import { UIKitIcon, Icon } from '@amalgama/react-native-ui-kit';

<Radio
	selectedIcon={<Icon as={UIKitIcon}  name="plus" />}
/>
```

### unselectedIcon

An icon component to show when the radio is unselected. The default value is the `circle` icon from the `UIKitIcon` icons package.

```jsx
import { UIKitIcon, Icon } from '@amalgama/react-native-ui-kit';

<Radio
	unselectedIcon={<Icon as={UIKitIcon}  name="plus" />}
/>
```
