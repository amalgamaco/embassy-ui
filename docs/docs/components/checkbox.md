import { Checkbox, HStack } from '@amalgama/react-native-ui-kit'
import CodePreview from '@site/src/components/CodePreview';
import ExampleCheckbox from '@site/src/components/ExampleCheckbox';
import { useState } from 'react'


# Checkbox

## Import

To add the `Checkbox` component to your project you can import it as follows:

```tsx
import { Checkbox } from '@amalgama/react-native-ui-kit';
```

## Examples
<CodePreview>
    <ExampleCheckbox />
</CodePreview>

```jsx
import { Checkbox } from '@amalgama/react-native-ui-kit';
import React, { useState } from 'react';

const App = () => {
	const [ isSelected, setSelected ] = useState( false );
	return (
		<Checkbox
			isSelected={ isSelected }
			onChange={ () => { setSelected( !isSelected ); } }
		/>
	);
};
```

## Props

### isSelected
If the checkbox is selected or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
    <HStack>
        <Checkbox />
        <Checkbox isSelected />
    </HStack>
</CodePreview>

### isIndeterminated
If the checkbox is indeterminated or not. This is usually used for lists of checkboxes when some of their children are checked but not all of them. This is only a visual state, it only changes the checkbox icon.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
    <Checkbox isIndeterminated/>
</CodePreview>

### disabled
If the checkbox is disabled or not.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| bool | No       | false   |

<CodePreview>
    <HStack>
        <Checkbox disabled />
        <Checkbox disabled isSelected />
        <Checkbox disabled isIndeterminated />
    </HStack>
</CodePreview>

### onChange
Invoked when the checkbox is pressed.

| TYPE     | REQUIRED |
| -------- | -------- |
| function | No       |

<CodePreview>
    <Checkbox onChange={ () => { window.alert( 'The checkbox was pressed!' ) } }/>
</CodePreview>

```jsx
<Checkbox onChange={ () => { window.alert( 'The checkbox was pressed!' ) } }/>
```

## Accessibility props
[React Native accessibility docs](https://reactnative.dev/docs/accessibility)

### accessible
Sets the component to an accessibility element. It is set by default to `true`.

### accessibilityRole
Communicates the purpose of the component. It is set by default to `"checkbox"`.

### accessibilityState
Describes the current state of the element. By default, indicates if the `Checkbox` is `disabled`, `isSelected` and `isIndeterminated`.