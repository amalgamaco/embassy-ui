import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from '@amalgama/react-native-ui-kit';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	}
} );

const TextExamples = () => (
	<View style={styles.container}>
		<Text fontSize="3xl" fontWeight="extrabold" textAlign="left" style={{ paddingBottom: 20 }}>Text</Text>
		<Text fontSize="xs" fontStyle="italic" fontWeight="medium">Text!</Text>
		<Text fontSize="md" color="primary.400" fontWeight="medium">Text!</Text>
		{/* Nested text components */}
		<Text fontSize="xl" color="primary.200" fontWeight="medium">
			<Text fontSize="md" bgColor="primary.400" fontWeight="medium">Text!</Text>
			Text
			<Text fontStyle="italic" fontSize="2xs" color="dark">Other text</Text>
		</Text>
		<Text fontSize="4xl" color="success.400" fontWeight="medium">Text!</Text>
	</View>
);

export default TextExamples;
