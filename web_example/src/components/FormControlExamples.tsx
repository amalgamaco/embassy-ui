import * as React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import { VStack, FormControl, Text } from '@amalgama/react-native-ui-kit';

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
	},
	textInput: {
		height: 30,
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: '#888'
	}
} );

const FormControlExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="h1" bgColor="primary.200">FormControl Component</Text>

		<Text variant="sh1" color="primary.800">With label</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
			isRequired
		>
			<TextInput
				style={styles.textInput}
				placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="sh1" color="primary.800">Not required</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
		>
			<TextInput
				style={styles.textInput}
				placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="sh1" color="primary.800">With hint</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
			hint="Remember to enter a valid email address"
			isRequired
		>
			<TextInput
				style={styles.textInput}
				placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="sh1" color="primary.800">Without label</Text>
		<View style={styles.separator} />

		<FormControl
			hint="Remember to enter a valid email address"
		>
			<TextInput
				style={styles.textInput}
				placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="sh1" color="primary.800">With error</Text>
		<View style={styles.separator} />

		<FormControl
			label="Email"
			error="The email is not valid!"
			isRequired
		>
			<TextInput
				style={styles.textInput}
				placeholder="Enter your email address"
			/>
		</FormControl>

		<View style={styles.vspace} />
	</VStack>
);

export default FormControlExamples;
