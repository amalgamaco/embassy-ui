import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Checkbox, VStack, Text, HStack
} from '@amalgama/embassy-ui';

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

const CheckboxExamples = () => {
	const [ isSelected, setIsSelected ] = useState( false );
	const [ isIndeterminated, setIsIndeterminated ] = useState( false );

	const onPressed = () => {
		if ( isIndeterminated ) {
			setIsIndeterminated( false );
		} else if ( isSelected ) {
			setIsIndeterminated( true );
			setIsSelected( false );
		} else {
			setIsSelected( true );
		}
	};

	const [ selectedValues, setSelectedValues ] = useState<string[]>( [] );

	return (
		<VStack style={styles.container}>
			<Text variant="headline">Checkbox Component</Text>
			<View style={styles.vspace} />
			<Text variant="subtitle">Enabled</Text>
			<View style={styles.separator} />

			<HStack>
				<Checkbox />
				<Checkbox selected />
				<Checkbox indeterminated />
			</HStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">Disabled</Text>
			<View style={styles.separator} />

			<HStack>
				<Checkbox disabled />
				<Checkbox disabled selected />
				<Checkbox disabled indeterminated />
			</HStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">On Change</Text>
			<View style={styles.separator} />

			<HStack>
				<Checkbox selected={isSelected} indeterminated={isIndeterminated} onPress={onPressed}/>
			</HStack>

			<View style={styles.vspace} />

			<Text variant="subtitle">With Label</Text>
			<View style={styles.separator} />

			<VStack alignItems="flex-start" justifyContent="flex-start" alignContent="flex-start" space="0">
				<Checkbox label="Unselected" />
				<Checkbox label="Selected" selected />
				<Checkbox label="Indeterminated" indeterminated />
				<Checkbox label="Disabled" disabled />
				<Checkbox label="Controlled" selected={isSelected} indeterminated={isIndeterminated} onPress={onPressed}/>
			</VStack>

			<View style={styles.vspace} />

			<Text variant="headline">Checkbox Group Component</Text>
			<View style={styles.vspace} />

			<Text variant="subtitle">Select multiple options</Text>
			<View style={styles.separator} />

			<Checkbox.Group
				value={selectedValues}
				onChange={setSelectedValues}
			>
				<Checkbox value="opt-1" label="Option 1" />
				<Checkbox value="opt-2" label="Option 2" />
				<Checkbox value="opt-3" label="Option 3" />
			</Checkbox.Group>

			<View style={styles.vspace} />
			<Text variant="subtitle">Disabled</Text>
			<View style={styles.separator} />

			<Checkbox.Group
				value={[ 'opt-2' ]}
				disabled
			>
				<Checkbox value="opt-1" label="Option 1" />
				<Checkbox value="opt-2" label="Option 2" />
				<Checkbox value="opt-3" label="Option 3" />
			</Checkbox.Group>

			<View style={styles.vspace} />
		</VStack>
	);
};

export default CheckboxExamples;
