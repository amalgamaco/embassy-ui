import * as React from 'react';

import { Alert, StyleSheet, View } from 'react-native';
import {
	Button, HStack, Text, VStack
} from '@amalgama/react-native-ui-kit';

const styles = StyleSheet.create( {
	container: {
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

const onButtonPressed = () => Alert.alert( 'Pressed!' );

const ButtonExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="h1" bgColor="primary.200">Button Component</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Variants</Text>
		<View style={styles.separator} />
		<Button variant="primary" onPress={onButtonPressed}>Primary</Button>
		<Button variant="secondary" onPress={onButtonPressed}>Secondary</Button>
		<Button variant="awesome" onPress={onButtonPressed}>Awesome</Button>
		<HStack space="1">
			<Button variant="danger" onPress={onButtonPressed}>Danger</Button>
			<Button variant="success" onPress={onButtonPressed}>Success</Button>
		</HStack>
		<Text variant="sh1" color="primary.800">Disabled</Text>
		<View style={styles.separator} />
		<Button variant="primary" disabled onPress={onButtonPressed}>Primary Disabled</Button>
		<Button variant="secondary" disabled onPress={onButtonPressed}>Secondary Disabled</Button>
		<Button variant="primary" __disabled={{ bg: 'error.100' }} disabled onPress={onButtonPressed}>Primary Disabled</Button>
	</VStack>
);

export default ButtonExamples;
