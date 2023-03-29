---
sidebar_position: 4
---

# Webpack Examples

In this page you will find several examples of webpack configuration for different kinds of React web applications. This page assumes you installed all the needed dependencies and you are using the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for the icons package.

## Create React App (without ejecting)
If you don't want to eject your [create react app](https://create-react-app.dev/) based project in order to modify your webpack's configuration (needed for embassy-ui to work properly on web) you can use on of the following apps to still be able to do it:
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [customize-cra](https://github.com/arackaf/customize-cra)

For example, if you are using `react-app-rewired` you should define your `config-overrides.js` file as follows:
```js
module.exports = {
	webpack: function( config, env ) {
		return {
			...config,
			module: {
				...config.module,
				rules: [
					...config.module.rules,
					// Parse react-native-animatable with Babel
					{
						test: /\.(js|jsx|ts|tsx)$/,
						loader: 'babel-loader',
						include: path.resolve(__dirname, 'node_modules/react-native-animatable/' ),
						options: {
							presets: [
								'@babel/env',
								'@babel/preset-react'
							],
							plugins: [
								'@babel/plugin-proposal-class-properties'
							]
						}
					},
					// In order for react-native-vector-icons to work
					{
						test: /\.ttf$/,
						loader: "url-loader", // or directly file-loader
						include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
					}
				]
			}
		};
	}
};
```

## React app with custom webpack configuration

For a standalone React app created without using `create-react-app` or for an ejected `created-react-app` based app you should modify your webpack config file as follows:

```js
module.exports = {
	module: {
		// react-native-web required configuration
		resolve: {
			extensions: [ '.web.tsx', '.tsx', '.web.ts', '.ts', '.web.js', '.js' ],
			alias: {
				'react-native$': 'react-native-web'
			}
		},
		rules: [
			...,
			// Parse react-native-animatable with Babel
			{
				test: /\.(js|jsx|ts|tsx)$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'node_modules/react-native-animatable/' ),
				options: {
					presets: [
						'@babel/env',
						'@babel/preset-react'
					],
					plugins: [
						'@babel/plugin-proposal-class-properties'
					]
				}
			},
			// In order for react-native-vector-icons to work
			{
				test: /\.ttf$/,
				loader: "url-loader", // or directly file-loader
				include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
			}
		]
	}
};
```

It's also recommended to modify your babel configuration and add the `react-native-web` plugin:

```js
// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],
  plugins: [
    'react-native-web',
  ],
};
```

:::info
Make sure you have all the required dependencies installed for the previous configuration to work:

```shell
yarn install react-native-web
yarn install --dev babel-loader babel-plugin-react-native-web
```
:::
