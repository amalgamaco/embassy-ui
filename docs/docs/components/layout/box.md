import CodePreview from "@site/src/components/CodePreview";
import ExampleBox from "@site/src/components/ExampleBox";

# Box

This component is a wrapper for the `View` component. It provides a simple way to add padding and margin to a component.

## Example:

<CodePreview>
	<ExampleBox
		paddingY="6"
		paddingX="20"
		rounded="sm"
		bg="secondary.50"
		borderColor="secondary.400"
		borderWidth="xs"
	/>
</CodePreview>

```jsx
import { Box, Text } from '@amalgamaco/embassy-ui';

<Box
	paddingY="6"
	paddingX="20"
	rounded="sm"
	bg="secondary.50"
	borderColor="secondary.400"
	borderWidth="xs"
>
	<Text color="text-secondary">This is a box!</Text>
</Box>
```

## Props

This component supports all the props of the [View](https://reactnative.dev/docs/view) component and the [Style Props](/docs/theming/style_props)


