import { Chip, Icon } from '@amalgama/embassy-ui';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ExampleChip = () => {
	const [ isSelected, setSelected ] = useState( false );

	return (
		<Chip
			label="Chip"
			selected={isSelected}
			icon={<Icon name="earth-outline" as={Ionicons} />}
			onPress={() => setSelected( !isSelected )}
			onDeletePress={() => { window?.alert( 'Delete pressed!' ); }}
		/>
	);
};

export default ExampleChip;
