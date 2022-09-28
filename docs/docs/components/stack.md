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
import { VStack, Text } from '@amalgama/react-native-ui-kit';

<Vstack>
  <Text bg="success.900">First</Text>
  <Text bg="secondary.900">Second</Text>
  <Text bg="error.900">Third</Text>
</Vstack>
```

### Horizontal Stack

<CodePreview>
    <ExampleHStack />
</CodePreview>

```jsx
import React from 'react';
import { HStack, Text } from '@amalgama/react-native-ui-kit';

<Hstack>
  <Text bg="success.900">First</Text>
  <Text bg="secondary.900">Second</Text>
  <Text bg="error.900">Third</Text>
</Hstack>
```

## Props

### Reversed

By default, the stack is from top to bottom if it's a VStack and from left to right if is a Hstack. You can reverse the stack by passing `reversed` prop.

<CodePreview>
    <ExampleVStack reversed />
</CodePreview>


```jsx
import React from 'react';
import { VStack, Text } from '@amalgama/react-native-ui-kit';

<Vstack reversed>
  <Text bg="success.900">First</Text>
  <Text bg="secondary.900">Second</Text>
  <Text bg="error.900">Third</Text>
</Vstack>
```

### Space

The spacing    between the components in the stack, not outside them.

<CodePreview>
    <ExampleVStack space={4} borderWidth={"xs"} />
</CodePreview>

```jsx
import React from 'react';
import { VStack, Text } from '@amalgama/react-native-ui-kit';

<Vstack space={4} borderWidht={"xs"}>
  <Text bg="success.900">First</Text>
  <Text bg="secondary.900">Second</Text>
  <Text bg="error.900">Third</Text>
</Vstack>
```


