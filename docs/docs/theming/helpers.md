---
sidebar_position: 10
---

# Helper Functions

## createStyleProps
Helper function that returns the same props that you pass to it but with the correct styled props type set. It enables suggestions from your IDE of choice when using Typescript.

```ts
createStyleProps<C extends ComponentName>( props: ComponentStyledProps<C>): ComponentStyledProps<C>
```

### Example
```tsx
import { Platform } from 'react-native';

// screens/Login.styles.ts
const content = createStyledProps<'VStack'>( {
	flexGrow: 1,
	bg: 'white',
	justifyContent: 'center'
} );

const input = createStyledProps<'TextInput'>( {
	rounded: 'lg',
	marginBottom: 2 
} );

const button = createStyledProps<'TextInput'>( {
	variant: 'primary',
	rounded: 'md',
	marginTop: '8',
	marginBottom: Platform.select( { android: '8', ios: '0' } )
} );

return { content, input, button };

// screens/Login.tsx
import styles from './Login.styles';

const Login: React.FC = () => {
	const {
		email: emailField,
		password: passwordField
	} = useLoginForm();

	return (
		<VStack {...styles.content}>
			<Box>
				<FormControl
					label="Email"
					error={emailField.error}
					marginBottom={5}
				>
					<TextInput
						value={emailField.value}
						keyboardType="email-address"
						onChangeText={( text ) => { emailField.write( text ); }}
						autoCapitalize='none'
						testID='email-field'
						{...styles.input}
					/>
				</FormControl>
				<FormControl
					label="Password"
					error={passwordField.error}
				>
					<PasswordInput
						value={passwordField.value}
						onChangeText={( text ) => { passwordField.write( text ); }}
						testID='password-field'
						{...styles.input}
					/>
				</FormControl>
				<Button
					disabled={!presenter.isLoginButtonEnabled}
					onPress={presenter.onLoginPressed}
					testID='login-button'
					{...styles.button}
				>
					Login
				</Button>
				</Box>
			</VStack>
	);
};
```