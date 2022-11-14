import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import {
	HStack, Text, VStack, Avatar
} from '@amalgama/embassy-ui';

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

const SRC = { uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' };

const AvatarExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">Avatar Component</Text>
		<Text variant="subtitle">Sizes</Text>
		<View style={styles.separator} />
		<HStack justifyContent="space-between">
			<Avatar source={SRC} size="xs" />
			<Avatar source={SRC} size="sm" />
			<Avatar source={SRC} size="md" />
			<Avatar source={SRC} size="lg" />
			<Avatar source={SRC} size="xl" />
		</HStack>
	</VStack>
);

export default AvatarExamples;
