---
sidebar_position: 3
---

# Theme Provider

In order for the UI Kit components to work properly they need to acces the main theme of the app. To make your theme available throughout your app you need to add the `ThemeProvider` to your root component. Update your `App.js` file as follows:

```tsx
import React from "react";
import { ThemeProvider } from "@amalgama/embassy-ui";

const App = () => (
	<ThemeProvider>
		{/* Your app content goes here */}
	</ThemeProvider>
);

export default App;
```

## ThemeProvider props

### theme
A custom theme config to be use instead of the default theme.

| TYPE   | REQUIRED | DEFAULT |
| ------ | -------- | ------- |
| `IThemeConfig` | No | [Default theme](../theming/default_theme.md) |

```tsx
<ThemeProvider theme={customTheme}>
   {...}
</ThemeProvider>
```

#### Related links
- [Default theme](../theming/default_theme.md)
- [Extending default theme](../theming/customizing_theme.md)

### colorMode

The color mode of the app.

| TYPE   | REQUIRED | DEFAULT |
| ------ | -------- | ------- |
| `light` | `dark` | No | `light` |

```tsx
<ThemeProvider colorMode="dark">
   {...}
</ThemeProvider>
```