---
sidebar_position: 2
---

# Installation

## Install the library

Run the following command to add the `Embassy UI` library to your project:

```sh
yarn add @amalgamaco/embassy-ui
```

### Web
You can use this library in your React JS project using [react-native-web](https://necolas.github.io/react-native-web/). To learn how to install and configure `react-native-web` follow the [project's installation guide](https://necolas.github.io/react-native-web/docs/installation/).

This library depends on [react-native-animatable](https://github.com/oblador/react-native-animatable) in order to perform the [Dialog component](../components/feedback/dialog) animations and there is an extra step of configuration in order for that to work on web:

In your webpack configuration you will need to add a new `module.rule` as follows:

```js
module.exports = {
  module: {
    rules: [
      ...,
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'node_modules/react-native-animatable/' )
        options: {
          presets: [
            '@babel/env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    ]
  }
}
```

For more webpack configuration examples you can check the [Webpack Examples page](./webpack_examples).

### NPM Private Registry Authorization
This package was uploaded to Amalgama's GitLab Private NPM Registry and in order to install it you need to set up the registry and an authorization token to access it.

To learn how to configure Amalgama's NPM Private registry and how to generate and configure an access token you can follow this guide: [Use a package from Amalgama's private registry (Spanish)](https://amalgamaco.notion.site/Usar-un-paquete-de-NPM-de-amalgama-14c007d2e6054f78880792cc613e44da).

## Peer dependencies
You need to install these peer dependencies in order to use the library:

- [react](https://www.npmjs.com/package/react) >= 17.0.0
- [react-native](https://www.npmjs.com/package/react-native) >= 0.65
- [react-native-svg](https://www.npmjs.com/package/react-native-svg)

:::caution
You need to add [react-native-svg](https://www.npmjs.com/package/react-native-svg) to your project and set it up properly (see [project's README](https://github.com/react-native-svg/react-native-svg#installation)) for the default icons package to work. This package is needed by several componentes including: [TextInput](../components/forms/text_input.md), [Radio](../components/forms/radio.md), [Checkbox](../components/forms/checkbox.md), etc.
:::

### Plataform specific
Some peer-dependencies are platform dependent:

#### For ReactNative projects
- [react-native-date-picker](https://github.com/henninghall/react-native-date-picker) (required by the [DateInput](../components/forms/date_input.md) component)

#### For ReactJS projects
- [react-fit](https://github.com/wojtekmaj/react-fit) (required by the [DateInput](../components/forms/date_input.md) component)
- [react-calendar](https://github.com/wojtekmaj/react-calendar) (required by the [DateInput](../components/forms/date_input.md) component)

## Default Fonts

### ReactNative

To install the default fonts (`Epilogue` and `Inter`) to your ReactNative project you need to follow the next steps:

1. Download all the font files from [here](https://git.amalgama.co/amalgama/packages/npm/embassy-ui/-/tree/main/example/assets/fonts) and put them in the `assets/fonts` folder (create the folder if it doesn't exists in your project).
2. Create a `react-native.config.js` file if you don't have already one in your project and add the following configuration:
	```js
	module.exports = {
		project: {
			ios: {},
			android: {}
		},
		assets: [ './assets/fonts/' ]
	};
	```
3. Link the assets:

	__For `react-native` < 0.69 __ 
	```sh
	yarn run react-native link
	```

	__For `react-native` >= 0.69__
	```sh
	npx react-native-asset
	```

### Web

To add the default fonts (`Epilogue` and `Inter`) to your React JS web project you need to:

1. Add the fonts links to your project's `public/index.html` file inside the `<head>` tag:
	```html
	<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	 ```
2. Extend the default theme to overwrite the font configuration to always use the same font family name not matter the weight or style:

```ts
const customTheme = extendThemeConfig( {
	typography: {
		fonts: {
			// When working with google fonts the font family is the
			// same for all variants
			'Epilogue': {
				100: { normal: 'Epilogue', italic: 'Epilogue' },
				200: { normal: 'Epilogue', italic: 'Epilogue' },
				300: { normal: 'Epilogue', italic: 'Epilogue' },
				400: { normal: 'Epilogue', italic: 'Epilogue' },
				500: { normal: 'Epilogue', italic: 'Epilogue' },
				600: { normal: 'Epilogue', italic: 'Epilogue' },
				700: { normal: 'Epilogue', italic: 'Epilogue' },
				800: { normal: 'Epilogue', italic: 'Epilogue' },
				900: { normal: 'Epilogue', italic: 'Epilogue' }
			},
			'Inter': {
				100: { normal: 'Inter', italic: 'Inter' },
				200: { normal: 'Inter', italic: 'Inter' },
				300: { normal: 'Inter', italic: 'Inter' },
				400: { normal: 'Inter', italic: 'Inter' },
				500: { normal: 'Inter', italic: 'Inter' },
				600: { normal: 'Inter', italic: 'Inter' },
				700: { normal: 'Inter', italic: 'Inter' },
				800: { normal: 'Inter', italic: 'Inter' },
				900: { normal: 'Inter', italic: 'Inter' }
			}
		}
	}
} as const );
```

For more information on how extend the default theme refer to the [Customizing Theme guide](../theming/customizing_theme.md).

## Add ThemeProvider

In order for the components to work correctly they need to access the current theme's configuration. You can provide this configuration using the [ThemeProvider](./theme_provider.md) component.

We recommend adding this component at the top of the components hierarchy, wrapping the whole app with it.

```tsx
import React from "react";
import { ThemeProvider } from "@amalgamaco/embassy-ui";

const App = () => (
	<ThemeProvider>
		{/* Your app content goes here */}
	</ThemeProvider>
);

export default App;
```