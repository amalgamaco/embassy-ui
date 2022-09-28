import CodePreview from '@site/src/components/CodePreview';
import ExampleText from '@site/src/components/ExampleText';

# Text

Text is a component that renders text. It is a wrapper around the [Text](https://facebook.github.io/react-native/docs/text.html) component from React Native.

## Import

To add the `Text` component to your project you can import it as follows:

```tsx
import { Text } from '@amalgama/react-native-ui-kit';
```

## Example

<CodePreview>
    <ExampleText/>
</CodePreview>

```tsx
import React from 'react';
import { Text } from '@amalgama/react-native-ui-kit';

<Text> Hello World </Text>;
```

## Props

### variant

The variant style to use. You can add more variants extending the theme configuration for this component.

The available variants are:

- `h1`
- `h2`
- `h3`
- `sh1`
- `sh2`
- `sh3`
- `body`
- `body-2`
- `links`
- `small`
- `small-bold`
- `caption`
- `caption-bold`

#### Example

<CodePreview>
    <ExampleText variant="h1"/>
</CodePreview>

```tsx
import React from 'react';
import { Text } from '@amalgama/react-native-ui-kit';

<Text variant="h1"> Hello World </Text>;
```

You can see the rest of the props in the [React Native documentation](https://facebook.github.io/react-native/docs/text.html#props).

