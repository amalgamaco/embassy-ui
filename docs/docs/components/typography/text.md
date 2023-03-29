import CodePreview from '@site/src/components/CodePreview';
import ExampleText from '@site/src/components/ExampleText';
import { Text } from '@amalgamaco/embassy-ui';

# Text

Text is a component that renders text. It is a wrapper around the [Text](https://facebook.github.io/react-native/docs/text.html) component from React Native.

## Import

To add the `Text` component to your project you can import it as follows:

```tsx
import { Text } from '@amalgamaco/embassy-ui';
```

## Example

<CodePreview>
	<ExampleText/>
</CodePreview>

```tsx
import React from 'react';
import { Text } from '@amalgamaco/embassy-ui';

<Text> Hello World </Text>;
```

## Props

### variant

The variant style to use. You can add more variants extending the theme configuration for this component.

The available variants are:

- `h1`
- `h2`
- `h3`
- `sh`
- `body`
- `body-special`
- `body-italic`
- `links`
- `small`
- `small-bold`
- `small-link`
- `x-small`
- `x-small-bold`
- `x-small-link`

<CodePreview>
	<Text variant="h1">Headline 1</Text>
	<Text variant="h2">Headline 2</Text>
	<Text variant="h3">Headline 3</Text>
	<Text variant="sh">Subtitle</Text>
	<Text variant="body">Body</Text>
	<Text variant="body-special">Body special</Text>
	<Text variant="body-italic">Body italic</Text>
	<Text variant="small">Small</Text>
	<Text variant="small-bold">Small bold</Text>
	<Text variant="small-link">Small link</Text>
	<Text variant="x-small">Extra small</Text>
	<Text variant="x-small-bold">Extra small bold</Text>
	<Text variant="x-small-link">Extra small link</Text>
</CodePreview>

```tsx
import React from 'react';
import { Text } from '@amalgamaco/embassy-ui';

<VStack>
	<Text variant="h1">Headline 1</Text>
	<Text variant="h2">Headline 2</Text>
	<Text variant="h3">Headline 3</Text>
	<Text variant="sh">Subtitle</Text>
	<Text variant="body">Body</Text>
	<Text variant="body-special">Body special</Text>
	<Text variant="body-italic">Body italic</Text>
	<Text variant="small">Small</Text>
	<Text variant="small-bold">Small bold</Text>
	<Text variant="small-link">Small link</Text>
	<Text variant="x-small">Extra small</Text>
	<Text variant="x-small-bold">Extra small bold</Text>
	<Text variant="x-small-link">Extra small link</Text>
<VStack>
```

You can see the rest of the props in the [React Native documentation](https://facebook.github.io/react-native/docs/text.html#props).

