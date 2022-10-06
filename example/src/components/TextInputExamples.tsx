import * as React from 'react';
import { Text, TextInput, VStack } from '@amalgama/embassy-ui';
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
		<Text variant="headline">Text Input Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Enabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='This is an enabled text input' type='password' />
		<View style={styles.vspace} />
		<TextInput placeholder='This is an enabled text input' type='text'/>

		<View style={styles.vspace} />

		<Text variant="subtitle">Disabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='This is a disabled password input' disabled type='password' />
		<View style={styles.vspace} />
		<TextInput placeholder='This is a disabled text input' disabled type='text'/>

		<View style={styles.vspace} />

		<Text variant="subtitle">Error</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<View>
			<TextInput placeholder='This is a text input that has an error' type='password' error />
			<View style={styles.vspace} />
			<TextInput placeholder='This is a text input that has an error' type='text' error />
		</View>
		<View style={styles.vspace} />
	</VStack>
);

export default TextInputExamples;
