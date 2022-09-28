import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Box, Text, VStack, HStack
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
	vstack: {
		width: '100%'
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const BoxExamples = () => (
	<VStack style={styles.container}>
		<Text variant="headline">Box Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Border radius</Text>
		<View style={styles.separator} />
		<VStack style={styles.vstack} space="3">
			<Box rounded="3xl" backgroundColor="error.400" padding="2.5">
				<Text textAlign="center">3xl</Text>
			</Box>
			<Box rounded="2l" backgroundColor="success.400" padding="2.5">
				<Text textAlign="center">2l</Text>
			</Box>
			<HStack justifyContent="space-between">
				<Box rounded="xs" bg="accent.600" padding="2.5">
					<Text textAlign="center">xs</Text>
				</Box>
				<Box rounded="sm" bg="accent.600" padding="2.5">
					<Text textAlign="center">sm</Text>
				</Box>
				<Box rounded="md" bg="accent.600" padding="2.5">
					<Text textAlign="center">md</Text>
				</Box>
				<Box rounded="xl" bg="accent.600" padding="2.5">
					<Text textAlign="center">xl</Text>
				</Box>
			</HStack>
		</VStack>
		<View style={styles.vspace} />
		<Text variant="subtitle">Padding</Text>
		<View style={styles.separator} />
		<VStack style={styles.vstack} space="3">
			<Box backgroundColor="error.400" padding="0.5">
				<Text textAlign="center">0.5</Text>
			</Box>
			<Box backgroundColor="success.400" padding="2.5">
				<Text textAlign="center">2.5</Text>
			</Box>
			<Box backgroundColor="information.400" padding="10">
				<Text textAlign="center">10</Text>
			</Box>
		</VStack>
		<View style={styles.vspace} />
		<Text variant="subtitle">Margin</Text>
		<View style={styles.separator} />
		<VStack style={styles.vstack} space="3">
			<Box backgroundColor="error.400" margin="0.5">
				<Text textAlign="center">0.5</Text>
			</Box>
			<Box backgroundColor="success.400" margin="3">
				<Text textAlign="center">3</Text>
			</Box>
			<Box backgroundColor="information.400" margin="10">
				<Text textAlign="center">10</Text>
			</Box>
		</VStack>
	</VStack>
);

export default BoxExamples;
