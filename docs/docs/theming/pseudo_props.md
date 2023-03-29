---
sidebar_position: 5
---

import { Button, Icon } from '@amalgamaco/embassy-ui';
import CodePreview from '@site/src/components/CodePreview';

# Pseudo-Props

Pseudo-props are a special kind of props that start with a double underscore (`__`) and can be used to set props for specific situations. They can be divided into two categories:
- __Internal Component Pseudo-Props__
- __State Pseudo-Props__

## Internal component pseudo props

This kind of pseudo-props allows setting Style Props to internal components. 

An example where these kind of pseudo-props are used is the [Button component](../components/forms/button.md) that allows setting styled props for several sub-components:

<CodePreview>
	<Button
		width="300px"
		variant="priority"
		leftIcon={<Icon name="bell" />}
		rightIcon={<Icon name="star" />}
		__leftIcon={{ color: 'information.900', size: 'md' }}
		__rightIcon={{ color: 'success.900' }}
		__stack={{ padding: '2', borderWidth: 'xs', borderColor: 'accent.600' }}
	>
		Button
	</Button>
</CodePreview>

```tsx
<Button
	width="300px"
	variant="priority"
	leftIcon={<Icon name="bell" />}
	rightIcon={<Icon name="star" />}
	__stack={{ padding: '2', borderWidth: 'xs', borderColor: 'accent.600' }}
	__leftIcon={{ color: 'information.900', size: 'md' }}
	__rightIcon={{ color: 'success.900' }}
>
	Button
</Button>
```

As you can see you're allowed to change the style for the internal stack, left icon and right icon components using the `__stack`, `__leftIcon` and `__rightIcon` pseudo-props.

For a list of the internal component pseudo-props supported for a given components check the props documentation for that specifc component.

## State pseudo props

This kind of pseudo-props allows setting Style Props to a component (and its internal sub-components) when the component is at a specific state.

For example, if we have a `Button` and we want to set a specifc style when the button is pressed we can use the `__pressed` pseudo prop to do it.

<CodePreview>
	<Button
		width="300px"
		variant="priority"
		__pressed={{ bg: 'success.900', __label: { color: 'accent.600' } }}
	>
		Click me!
	</Button>
</CodePreview>

```tsx
<Button
	width="300px"
	variant="priority"
	__pressed={{ bg: 'success.900', __label: { color: 'accent.600' } }}
>
	Button
</Button>
```

Here you have a list of all the state props supported for all components (take into accoun that some state are not supported by all components):

| State | Description | Pseudo-Prop name |
| -- | -- | -- |
| __Disabled__ | It happens when a control component (`Button`, `Checkbox`, etc.) is disabled.  | `__disabled` |
| __Pressed__ | It happens when a pressable component (`Button`, `IconButton`, `Checkbox`, etc.) is pressed.  | `__pressed` |
| __Selected__ | It happens when a selectable component (`Checkbox, Radio, etc`) is selected.  | `__selected` |
| __Indeterminated__ | It happens when the selection state for a selectable component (`Checkbox`) is indeterminated.  | `__indeterminated` |
| __Hovered__ | It happens when component is hovered.  | `__hovered` |
| __Focused__ | It happens when a focusable component (`Button`, `IconButton`, `Checkbox`, etc.) gains focus.  | `__focused` |


## Composing Pseudo-Props

If you want to set style props for an internal component when the main component is at a specific state the right way to compose those pseudo-props (internal and state) is starting by the state prop and then adding the internal component styles there:

__✅ Right__
```tsx
<Button
	width="300px"
	variant="priority"
	__pressed={{ __label: { color: 'accent.600' } }}
>
	Button
</Button>
```

__❌ Wrong__
```tsx
<Button
	width="300px"
	variant="priority"
	// This will not work
	__label={{ __pressed: { color: 'accent.600' } }}
>
	Button
</Button>
```

## Color mode Pseudo-Props

If you want to apply specific props when the theme is set to a specific color mode you can use the pseudo-props `__light` and `__dark`, that will override the other props when the theme is set to `light` or `dark` color mode respectivily.

### Example
:::info
Change the color mode from the sun / moon icon on the top right border of the site to see how the example works.
:::


<CodePreview>
	<Button
		variant="primary"
		width="300px"
		__dark={{
			__label: { color: 'accent.900' },
			__pressed: {
				__label: { color: 'success.500' }
			}
		}}
	>
		Press me!
	</Button>
</CodePreview>

```tsx
<Button
	variant="primary"
	width="300px"
	__dark={{
		__label: { color: 'accent.900' },
		__pressed: {
			__label: { color: 'success.500' }
		}
	}}
>
	Press me!
</Button>
```