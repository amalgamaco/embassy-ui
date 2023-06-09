/* eslint-disable no-alert */
import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Radio, VStack, Text, HStack
} from '@amalgamaco/embassy-ui';

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

const RadioExamples = () => {
	const [ selected, setSelected ] = useState( false );
	const [ selectedValue, setSelectedValue ] = useState<string | undefined>();

	return (
		<VStack style={styles.container}>
			<Text variant="headline">Radio Component</Text>
			<View style={styles.vspace} />
			<Text variant="subtitle">Enabled</Text>
			<View style={styles.separator} />

			<HStack>
				<Radio />
				<Radio selected />
			</HStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">Disabled</Text>
			<View style={styles.separator} />

			<HStack>
				<Radio disabled />
				<Radio disabled selected />
			</HStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">On press</Text>
			<View style={styles.separator} />

			<HStack>
				<Radio selected={selected} onPress={() => setSelected( prev => !prev )} />
			</HStack>

			<View style={styles.vspace} />

			<Text variant="subtitle">With Label</Text>
			<View style={styles.separator} />

			<VStack alignItems="flex-start" space="2">
				<HStack justifyContent="flex-start" space="4">
					<Radio label="Unselected" />
					<Radio label="Selected" selected />
				</HStack>

				<HStack justifyContent="flex-start" space="4">
					<Radio disabled label="Unselected" />
					<Radio disabled label="Selected" selected />
				</HStack>
			</VStack>

			<View style={styles.vspace} />

			<Text variant="headline">Radio Group Component</Text>
			<View style={styles.vspace} />

			<Text variant="subtitle">Select one option</Text>
			<View style={styles.separator} />

			<Radio.Group
				value={selectedValue}
				onChange={setSelectedValue}
			>
				<Radio value="opt-1" label="Option 1" />
				<Radio value="opt-2" label="Option 2" />
				<Radio value="opt-3" label="Option 3" />
			</Radio.Group>

			<View style={styles.vspace} />
			<Text variant="subtitle">Disabled</Text>
			<View style={styles.separator} />

			<Radio.Group
				value={'opt-2'}
				disabled
			>
				<Radio value="opt-1" label="Option 1" />
				<Radio value="opt-2" label="Option 2" />
				<Radio value="opt-3" label="Option 3" />
			</Radio.Group>

			<View style={styles.vspace} />

		</VStack>
	);
};

export default RadioExamples;
