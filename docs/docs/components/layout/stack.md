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
import { VStack } from '@amalgamaco/embassy-ui';
import StackElement from "./StackElement";

<VStack borderWidth="xs" borderRadius="sm" borderColor="primary.300">
	<StackElement color="success.300" label="First" width={300} />
	<StackElement color="warning.300" label="Second" width={300} />
	<StackElement color="error.300" label="Third" width={300} />
</VStack>
```

### Horizontal Stack

<CodePreview>
    <ExampleHStack />
</CodePreview>

```jsx
import React from 'react';
import { HStack } from '@amalgamaco/embassy-ui';
import StackElement from "./StackElement";

<HStack borderWidth="xs" borderRadius="sm" borderColor="primary.300">
	<StackElement color="success.300" label="First" width={140} />
	<StackElement color="warning.300" label="Second" width={140} />
	<StackElement color="error.300" label="Third" width={140} />
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
import { VStack } from '@amalgamaco/embassy-ui';
import StackElement from "./StackElement";

<VStack reversed borderWidth="xs" borderRadius="sm" borderColor="primary.300">
	<StackElement color="success.300" label="First" width={300} />
	<StackElement color="warning.300" label="Second" width={300} />
	<StackElement color="error.300" label="Third" width={300} />
</VStack>
```

### space

The spacing between the components in the stack. This space is calculated using the `layout.spacing` scale in the theme config.

<CodePreview>
    <ExampleVStack space="4" />
</CodePreview>

```jsx
import React from 'react';
import { VStack } from '@amalgamaco/embassy-ui';

<VStack space="4" borderWidth="xs" borderRadius="sm" borderColor="primary.300">
	<StackElement color="success.300" label="First" width={300} />
	<StackElement color="warning.300" label="Second" width={300} />
	<StackElement color="error.300" label="Third" width={300} />
</VStack>
```


