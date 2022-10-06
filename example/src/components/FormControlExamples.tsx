import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	VStack, FormControl, TextInput, Text
} from '@amalgama/embassy-ui';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
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
} );

const FormControlExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">FormControl Component</Text>

		<Text variant="subtitle">With label</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
			isRequired
		>
			<TextInput placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="subtitle">Not required</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
		>
			<TextInput placeholder="Enter your email address" />
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="subtitle">With hint</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
			hint="Remember to enter a valid email address"
			isRequired
		>
			<TextInput placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="subtitle">Without label</Text>
		<View style={styles.separator} />

		<FormControl
			hint="Remember to enter a valid email address"
		>
			<TextInput placeholder="Enter your email address" />
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="subtitle">With error</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
			error="The email is not valid!"
			isRequired
		>
			<TextInput value="invalid-email" error />
		</FormControl>

		<View style={styles.vspace} />
	</VStack>
);

export default FormControlExamples;
