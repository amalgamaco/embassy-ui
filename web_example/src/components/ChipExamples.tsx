import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Chip, HStack, Icon, Text, VStack
} from '@amalgama/embassy-ui';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const onChipPressed = () => alert( 'Pressed!' );
const onDeletePressed = () => alert( 'Delete pressed!' );

const ChipExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">Chip Component</Text>
		<View style={styles.vspace} />
		<HStack space="2" width="100%" flexWrap="wrap">
			<Chip label="Label" onPress={onChipPressed} />
			<Chip label="Selected" onPress={onChipPressed} selected />
			<Chip label="Disabled" onPress={onChipPressed} disabled />
		</HStack>
		<HStack space="2" width="100%" flexWrap="wrap">
			<Chip
				icon={<Icon name="lightning-bolt-outline" as={MaterialCommunityIcon} />}
				label="Left Icon"
			/>
			<Chip
				label="Delete Icon"
				onDeletePress={onDeletePressed}
			/>
		</HStack>
		<HStack space="2" width="100%" flexWrap="wrap">
			<Chip
				label="Custom Delete Icon"
				deleteIcon={<Icon name="close-circle-outline" as={MaterialCommunityIcon} />}
				onDeletePress={onDeletePressed}
			/>
		</HStack>
	</VStack>
);

export default ChipExamples;
