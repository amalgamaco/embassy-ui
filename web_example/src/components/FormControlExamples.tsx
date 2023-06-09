import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	VStack, FormControl, TextInput, Text,
	Checkbox, Radio
} from '@amalgamaco/embassy-ui';

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
			<TextInput placeholder="Enter your email address" />
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
			<TextInput placeholder="Enter your email address" />
		</FormControl>

		<View style={styles.vspace} />

		<Text variant="subtitle">With info button</Text>
		<View style={styles.separator} />

		<Text variant="body">OnPress variant:</Text>

		<FormControl
			label="Email"
			showInfoIcon
			onInfoIconPress={() => window.alert( 'info pressed!!' )}>
			<TextInput placeholder="Enter your email address" />
		</FormControl>

		<View style={styles.vspace} />
		<Text variant="body">OnHover variant:</Text>

		<FormControl
			label="Email"
			showInfoIcon
			onInfoIconHoverIn={() => window.alert( 'info hovered in!!' )}
			onInfoIconHoverOut={() => window.alert( 'info hovered out!!' )}>
			<TextInput placeholder="Enter your email address" />
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
		<Text variant="subtitle">With Checkboxes</Text>
		<View style={styles.separator} />

		<FormControl
			label="What are your favorite languages?"
			error="You have to select at least one!"
			isRequired
		>
			<Checkbox.Group>
				<Checkbox label="Javascript" value="js" />
				<Checkbox label="Typescript" value="ts" />
				<Checkbox label="Ruby" value="rb" />
				<Checkbox label="Python" value="py" />
			</Checkbox.Group>
		</FormControl>

		<View style={styles.vspace} />
		<Text variant="subtitle">With Radios</Text>
		<View style={styles.separator} />

		<FormControl
			label="What is your favorite language?"
			error="You have to select one!"
			isRequired
		>
			<Radio.Group>
				<Radio label="Javascript" value="js" />
				<Radio label="Typescript" value="ts" />
				<Radio label="Ruby" value="rb" />
				<Radio label="Python" value="py" />
			</Radio.Group>
		</FormControl>

		<View style={styles.vspace} />
	</VStack>
);

export default FormControlExamples;
