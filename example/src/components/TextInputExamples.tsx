import * as React from 'react';
import {
	Text, TextInput, VStack, UIKitIcon, Icon
} from '@amalgamaco/embassy-ui';
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
const icon = <Icon as={UIKitIcon} name="eye" />;
const onIconPress = () => window.alert( 'Icon pressed' );
const TextInputExamples = () => (
	<VStack>
		<Text variant="headline">Text Input Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Enabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='This is an enabled text input' />
		<View style={styles.vspace} />
		<TextInput placeholder='Now with an icon!' icon={icon} onIconPress={onIconPress} />

		<View style={styles.vspace} />

		<Text variant="subtitle">Placeholder color</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='Error color for placeholder' placeholderTextColor="error.600" />
		<View style={styles.vspace} />

		<Text variant="subtitle">Disabled</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<TextInput placeholder='This is a disabled text input' disabled />
		<View style={styles.vspace} />
		<TextInput placeholder='Now with an icon!' disabled icon={icon} onIconPress={onIconPress} />

		<View style={styles.vspace} />

		<Text variant="subtitle">Error</Text>
		<View style={styles.separator} />
		<View style={styles.vspace} />
		<View>
			<TextInput placeholder='This is a text input that has an error' error />
			<View style={styles.vspace} />
			<TextInput placeholder='Now with an icon!' error icon={icon} onIconPress={onIconPress} />
		</View>
		<View style={styles.vspace} />
	</VStack>
);

export default TextInputExamples;
