import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Box, Text } from '@amalgama/react-native-ui-kit';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
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
		flex: 1,
		width: '100%',
		flexDirection: 'column',
		alignContent: 'stretch'
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const BoxExamples = () => (
	<View style={styles.container}>
		<Text variant="h1" bgColor="primary.200">Box Component</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Border radius</Text>
		<View style={styles.separator} />
		<Box style={styles.vstack}>
			<Box rounded="3xl" backgroundColor="error.400" padding="2.5" margin="0.5">
				<Text textAlign="center">3xl</Text>
			</Box>
			<Box rounded="xl" backgroundColor="success.400" padding="2.5" margin="0.5">
				<Text textAlign="center">xl</Text>
			</Box>
			<Box rounded="xs" backgroundColor="information.400" padding="2.5" margin="0.5">
				<Text textAlign="center">xs</Text>
			</Box>
		</Box>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Padding</Text>
		<View style={styles.separator} />
		<Box style={styles.vstack}>
			<Box backgroundColor="error.400" padding="0.5" margin="0.5">
				<Text textAlign="center">0.5</Text>
			</Box>
			<Box backgroundColor="success.400" padding="2.5" margin="0.5">
				<Text textAlign="center">2.5</Text>
			</Box>
			<Box backgroundColor="information.400" padding="10" margin="0.5">
				<Text textAlign="center">10</Text>
			</Box>
		</Box>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Margin</Text>
		<View style={styles.separator} />
		<Box style={styles.vstack}>
			<Box backgroundColor="error.400" padding="0.5" margin="0.5">
				<Text textAlign="center">0.5</Text>
			</Box>
			<Box backgroundColor="success.400" padding="0.5" margin="3">
				<Text textAlign="center">3</Text>
			</Box>
			<Box backgroundColor="information.400" padding="0.5" margin="10">
				<Text textAlign="center">10</Text>
			</Box>
		</Box>
	</View>
);

export default BoxExamples;
