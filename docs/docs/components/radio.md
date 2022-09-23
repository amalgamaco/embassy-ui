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

### as
The icon components family to use. See [Icon - as prop documentation](./icon.md#as) for more information.
The default value is `UIKitIcon`.

```jsx
import UIKitIcon from '@amalgama/react-native-ui-kit';

<Radio
	as={UIKitIcon}
	selectedIcon="circle-filled"
    unselectedIcon="circle"
	onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```

### selectedIcon
The name of the icon from the icon family selected to use when the button is selected. See [Icon - name prop documentation](./icon.md#name) for more information. The default value is `circle-filled`.

```jsx
import UIKitIcon from '@amalgama/react-native-ui-kit';

<Radio
    as={UIKitIcon}
    selectedIcon="circle-filled"
    unselectedIcon="circle"
    onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```

### unselectedIcon

The name of the icon from the icon family selected to use when the button is unselected. See [Icon - name prop documentation](./icon.md#name) for more information. The default value is `circle`.

```jsx
import UIKitIcon from '@amalgama/react-native-ui-kit';

<Radio
    as={UIKitIcon}
    selectedIcon="circle-filled"
    unselectedIcon="circle"
    onPress={() => { window && window.alert( 'Clicked!' );}}
/>
```
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
    <HStack backgroundColor="white">
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

## Accessibility props
[React Native accessibility docs](https://reactnative.dev/docs/accessibility)

### accessible
Sets the component to an accessibility element. It is set by default to `true`.

### accessibilityRole
Communicates the purpose of the component. It is set by default to `"radio"`.

### accessibilityState
Describes the current state of the element. By default, indicates if the `Radio` is `disabled`, `selected` or `unselected`.