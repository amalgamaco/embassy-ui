import * as React from 'react';
import {
	Text, PasswordInput, VStack, Icon
} from '@amalgamaco/embassy-ui';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const styles = {
	PasswordInput: {
		height: 56
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	},
	separator: {
		height: 1,
		minWidth: '100%',
		marginTop: 2,
		marginBottom: 6,
		backgroundColor: 'black'
	}
};

const PasswordInputExamples = () => (
	<VStack>
		<Text variant="headline">Password Input Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Enabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<View style={{ width: 327 }}>
			<PasswordInput
				placeholder='This is an enabled password input'
			/>
		</View>
		<View style={styles.vspace} />

		<Text variant="subtitle">Disabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<View style={{ width: 327 }}>
			<PasswordInput placeholder='This is a disabled password input' disabled />
		</View>
		<View style={styles.vspace} />

		<Text variant="subtitle">Error</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<View style={{ width: 327 }}>
			<PasswordInput
				value="123456"
				placeholder='This is a password input that has an error'
				error
			/>
		</View>
		<View style={styles.vspace} />

		<Text variant="subtitle">With custom icons</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<View style={{ width: 327 }}>
			<PasswordInput
				placeholder='This is a password input '
				showPasswordIcon={<Icon as={Feather} name="unlock" />}
				hidePasswordIcon={<Icon as={Feather} name="lock" />}
				value="123456"
			/>
		</View>
		<View style={styles.vspace} />
	</VStack>
);

export default PasswordInputExamples;
