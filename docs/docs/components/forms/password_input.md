import {VStack, Icon, PasswordInput} from '@amalgamaco/embassy-ui'
import CodePreview from '@site/src/components/CodePreview'
import Feather from 'react-native-vector-icons/Feather';

# PasswordInput

The `PasswordInput` is a special type of text input that hides the entered text.

## Example

<CodePreview>
	<PasswordInput placeholder="Enter your password" width="300px" />
</CodePreview>

```jsx
import { PasswordInput } from '@amalgamaco/embassy-ui';

<PasswordInput placeholder="Enter your password" width="300px" />
```

## Props

Besides the props from `TextInput`, the `PasswordInput` has the following props:

### showPasswordIcon

The icon to show the password. Defaults to `UIKitIcon`'s `eye` icon.

| TYPE | REQUIRED |
| ---- | -------- |
| `JSX.Element` | No       |

<CodePreview>
	<PasswordInput 
		placeholder="Enter your password"
		width="300px" 
		showPasswordIcon={<Icon as={Feather} name="unlock"/>}
	/>
</CodePreview>

```jsx
<PasswordInput 
	placeholder="Enter your password"
	width="300px" 
	showPasswordIcon={<Icon as={Feather} name="unlock"/>}
/>
```

### hidePasswordIcon

The icon to hide the password. Defaults to `UIKitIcon`'s `eye-off` icon.

| TYPE | REQUIRED |
| ---- | -------- |
| `JSX.Element` | No       |

<CodePreview>
	<PasswordInput 
		placeholder="Enter your password"
		width="300px" 
		hidePasswordIcon={<Icon as={Feather} name="lock"/>}
	/>
</CodePreview>

```jsx
<PasswordInput 
	placeholder="Enter your password"
	width="300px" 
	hidePasswordIcon={<Icon as={Feather} name="lock"/>}
/>
```

### defaultSecure

Whether the password is hidden or not by default.

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No  | `true`  |

<CodePreview>
	<VStack space="4">
		<PasswordInput 
			placeholder="Your password will be visible"
			width="300px" 
			defaultSecure={false}
		/>
		<PasswordInput
			placeholder="Your password will not be visible" 
			width="300px" 
		/>
	</VStack>
</CodePreview>

```jsx
<VStack space="4">
	<PasswordInput 
		placeholder="Your password will be visible" 
		width="300px" 
		defaultSecure={false}
	/>
	<PasswordInput
		placeholder="Your password will not be visible" 
		width="300px"
	/>
</VStack>
```

### isNewPassword (iOS only)

For iOS 12+ it sets the `textContentType` prop to `newPassword` indicating it's a new password input the user may want to save in the keychain. You can read more about it in the [textContentType prop docs](https://reactnative.dev/docs/textinput#textcontenttype-ios).

:::info
If you set this prop to `true` remember to check also the [passwordRules prop](https://reactnative.dev/docs/textinput#passwordrules-ios) in order to indicate a set of rules the new password must comply with.
:::

| TYPE | REQUIRED | DEFAULT |
| ---- | -------- | ------- |
| `boolean` | No  | `false`  |

<CodePreview>
	<PasswordInput 
		placeholder="Your password will be visible"
		width="300px" 
		isNewPassword
	/>
</CodePreview>

```jsx
<PasswordInput 
	placeholder="Your password will be visible" 
	width="300px" 
	isNewPassword
/>
```

## Pseudo props

The `PasswordInput` accepts the same pseudo props as `TextInput`. See the [TextInput docs](./text_input#pseudo-props) for more info.
