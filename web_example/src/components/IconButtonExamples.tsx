import React from 'react';
import { StyleSheet } from 'react-native';

import {
	IconButton, VStack, HStack, Text
} from '@amalgama/react-native-ui-kit';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const onPressed = () => window.alert( 'Pressed!' );

const IconButtonExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">IconButton Component</Text>
		<HStack space={2} justifyContent="space-between">
			<IconButton name="heart" onPress={onPressed} color="error.700" size="2xs" />
			<IconButton name="heart" onPress={onPressed} color="information.100" size="xs" />
			<IconButton name="heart" onPress={onPressed} color="success.200" size="sm" />
			<IconButton name="heart" onPress={onPressed} color="success.300" size="md" />
			<IconButton name="heart" onPress={onPressed} color="accent.400" size="lg" />
			<IconButton name="heart" onPress={onPressed} color="error.500" size="xl" />
			<IconButton name="heart" onPress={onPressed} color="success.600" size="2xl" />
		</HStack>
	</VStack>
);

export default IconButtonExamples;
