/* eslint-disable no-alert */
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	RadioButton, VStack, Text, HStack
} from '@amalgama/react-native-ui-kit';

const styles = StyleSheet.create( {
	container: {
		width: '100%',
		marginBottom: 20
	},
	separator: {
		height: 1,
		minWidth: '100%',
		marginTop: 2,
		marginBottom: 6,
		backgroundColor: 'black'
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const RadioButtonExamples = () => {
	const [ selected, setSelected ] = React.useState( false );
	return (
		<VStack style={styles.container}>
			<Text variant="h1" bgColor="primary.200">RadioButton Component</Text>
			<View style={styles.vspace} />
			<Text variant="sh1" color="primary.800">Enabled</Text>
			<View style={styles.separator} />

			<HStack>
				<RadioButton />
				<RadioButton selected />
			</HStack>

			<View style={styles.vspace} />
			<Text variant="sh1" color="primary.800">Disabled</Text>
			<View style={styles.separator} />

			<HStack>
				<RadioButton disabled />
				<RadioButton disabled selected />
			</HStack>

			<View style={styles.vspace} />
			<Text variant="sh1" color="primary.800">On press</Text>
			<View style={styles.separator} />

			<HStack>
				<RadioButton selected={selected} onPress={() => setSelected( prev => !prev )} />
			</HStack>

			<View style={styles.vspace} />

		</VStack>
	);
};

export default RadioButtonExamples;