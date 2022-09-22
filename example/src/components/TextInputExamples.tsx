import * as React from 'react';
import { Text, TextInput, VStack } from '@amalgama/react-native-ui-kit';
import { View } from 'react-native';

const styles = {
	textInput: {
		marginBottom: 20,
		width: 200
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

const TextInputExamples = () => (
	<VStack>
		<Text variant="h1" bgColor="primary.200">Text Input Component</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Enabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='This is an enabled text input' isPassword/>
		<View style={styles.vspace} />

		<Text variant="sh1" color="primary.800">Disabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='This is a disabled text input' disabled isPassword />
		<View style={styles.vspace} />
	</VStack>
);

export default TextInputExamples;
