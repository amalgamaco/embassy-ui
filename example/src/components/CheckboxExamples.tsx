import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Checkbox, VStack, Text, HStack
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

const TextExamples = () => (
	<VStack style={styles.container}>
		<Text variant="h1" bgColor="primary.200">Checkbox Component</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Enabled</Text>
		<View style={styles.separator} />

		<HStack>
			<Checkbox></Checkbox>
			<Checkbox isSelected></Checkbox>
			<Checkbox isIndeterminated></Checkbox>
		</HStack>

		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Disabled</Text>
		<View style={styles.separator} />

		<HStack>
			<Checkbox disabled></Checkbox>
			<Checkbox disabled isSelected></Checkbox>
			<Checkbox disabled isIndeterminated></Checkbox>
		</HStack>

		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Sizes and colors</Text>
		<View style={styles.separator} />

		<HStack space={'3'} marginX={'3'}>
			<Checkbox __icon={{ size: 'xl' }} __unselected={{ __icon: { color: 'error.700' } }}></Checkbox>
			<Checkbox isSelected __icon={{ size: 'lg' }} __selected={{ __icon: { color: 'success.500' } }}></Checkbox>
			<Checkbox isIndeterminated __icon={{ size: 'md' }} __indeterminate={{ __icon: { color: 'warning.400' } }}></Checkbox>
		</HStack>

		<View style={styles.vspace} />

	</VStack>
);

export default TextExamples;
