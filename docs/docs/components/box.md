import CodePreview from "@site/src/components/CodePreview";
import ExampleBox from "@site/src/components/ExampleBox";

# Box

This component is a wrapper for the `View` component. It provides a simple way to add padding and margin to a component.

## Example:

<CodePreview>
    <ExampleBox bg="primary.400" borderWidth="xs" padding={1}/>
</CodePreview>

```jsx
import { Box, Text } from '@amalgama/embassy-ui';

<Box bg="primary.400" borderWidth="xs" padding={1}>
    <Text>This is a box!</Text>
</Box>
```

## Props

This component supports all the props of the [View](https://reactnative.dev/docs/view) component and the [Style Props](/docs/theming/style_props)


