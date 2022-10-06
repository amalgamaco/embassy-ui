import CodePreview from "@site/src/components/CodePreview";
import ExampleVStack from "@site/src/components/ExampleVStack";
import ExampleHStack from "@site/src/components/ExampleHStack";

# Stack

Stack is a layout component that allows you to stack components on top of each other. It has two variants: `VStack` and `HStack`. `VStack` is a vertical stack, and `HStack` is a horizontal stack.

You can style the stack using the [style props](/docs/theming/style_props).

## Example
### Vertical Stack

<CodePreview>
    <ExampleVStack />
</CodePreview>

```jsx
import React from 'react';
import { VStack } from '@amalgama/embassy-ui';
import StackElement from "./StackElement";

<VStack borderWidth="xs" borderRadius="sm">
	<StackElement color="success.500" label="First" />
	<StackElement color="secondary.500" label="Second" />
	<StackElement color="warning.700" label="Third" />
</VStack>
```

### Horizontal Stack

<CodePreview>
    <ExampleHStack />
</CodePreview>

```jsx
import React from 'react';
import { HStack } from '@amalgama/embassy-ui';
import StackElement from "./StackElement";

<HStack borderWidth="xs" borderRadius="sm">
	<StackElement color="success.500" label="First" />
	<StackElement color="secondary.500" label="Second" />
	<StackElement color="warning.700" label="Third" />
</HStack>
```

## Props

### reversed

By default, the stack is from top to bottom if it's a VStack and from left to right if is a Hstack. You can reverse the stack by passing `reversed` prop.

<CodePreview>
    <ExampleVStack reversed />
</CodePreview>


```jsx
import React from 'react';
import { VStack } from '@amalgama/embassy-ui';
import StackElement from "./StackElement";

<Vstack reversed borderWidth="xs" borderRadius="sm">
	<StackElement color="success.500" label="First" />
	<StackElement color="secondary.500" label="Second" />
	<StackElement color="warning.700" label="Third" />
</Vstack>
```

### space

The spacing between the components in the stack. This space is calculated using the `layout.spacing` scale in the theme config.

<CodePreview>
    <ExampleVStack space={4}/>
</CodePreview>

```jsx
import React from 'react';
import { VStack } from '@amalgama/embassy-ui';

<Vstack space={4} borderWidht={"xs"} borderRadius="sm">
	<StackElement color="success.500" label="First" />
	<StackElement color="secondary.500" label="Second" />
	<StackElement color="warning.700" label="Third" />
</Vstack>
```


