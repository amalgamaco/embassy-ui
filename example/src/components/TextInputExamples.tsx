import * as React from 'react';
import { Text, TextInput, VStack } from '@amalgama/react-native-ui-kit';
import { View } from 'react-native';

const styles = {
	textInput: {
		marginBottom: 20,
		borderColor: 'grey',
		borderWidth: 1,
		width: 200,
		padding: 10,
		borderRadius: 7
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
};

const TextInputExamples = () => (
	<VStack>
		<Text variant="h1" bgColor="primary.200">Text Input Component</Text>
		<View style={styles.vspace} />
		<TextInput placeholder='This is a text input' style={styles.textInput} />
	</VStack>
);

export default TextInputExamples;
