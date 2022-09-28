import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, VStack } from '@amalgama/react-native-ui-kit';

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
		<Text variant="headline">Text Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Variants</Text>
		<View style={styles.separator} />
		<Text variant="h1">Headline 1</Text>
		<Text variant="h2">Headline 2</Text>
		<Text variant="h3">Headline 3</Text>
		<Text variant="sh">Subtitle</Text>
		<Text variant="body">Body</Text>
		<Text variant="body-special">Body special</Text>
		<Text variant="body-italic">Body italic</Text>
		<Text variant="links">Links</Text>
		<Text variant="small">Small</Text>
		<Text variant="small-bold">Small bold</Text>
		<Text variant="small-link">Small link</Text>
		<Text variant="x-small">Extra small</Text>
		<Text variant="x-small-bold">Extra small bold</Text>
		<Text variant="x-small-link">Extra small link</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Free props</Text>
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
