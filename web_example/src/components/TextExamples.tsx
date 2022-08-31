import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, VStack, CheckBox } from '@amalgama/react-native-ui-kit';

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
		<CheckBox></CheckBox>
		<Text variant="h1" bgColor="primary.200">Text Component</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Variants</Text>
		<View style={styles.separator} />
		<Text variant="h1">Headline 1</Text>
		<Text variant="h2">Headline 2</Text>
		<Text variant="h3">Headline 3</Text>
		<Text variant="sh1">Subtitle 1</Text>
		<Text variant="sh2">Subtitle 2</Text>
		<Text variant="sh3">Subtitle 3</Text>
		<Text variant="body">Body text</Text>
		<Text variant="body-2">Body text 2</Text>
		<Text variant="links">Links</Text>
		<Text variant="small">Small text</Text>
		<Text variant="small-bold">Small bold text</Text>
		<Text variant="caption">Caption text</Text>
		<Text variant="caption-bold">Caption bold text</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Free props</Text>
		<View style={styles.separator} />
		<Text fontSize="3xl" fontWeight="extrabold" textAlign="left" style={{ paddingBottom: 20 }}>Text</Text>
		<Text fontSize="xs" fontStyle="italic" fontWeight="medium">Text!</Text>
		<Text fontSize="md" color="primary.400" fontWeight="medium">Text!</Text>
		{/* Nested text components */}
		<Text fontSize="xl" color="primary.200" fontWeight="medium">
			<Text fontSize="md" bgColor="primary.400" fontWeight="medium">Text!</Text>
			Text
			<Text fontStyle="italic" fontSize="2xs" color="dark">Other text</Text>
		</Text>
		<Text fontSize="4xl" lineHeight="4xl" color="success.400" fontWeight="medium">Text!</Text>
	</VStack>
);

export default TextExamples;
