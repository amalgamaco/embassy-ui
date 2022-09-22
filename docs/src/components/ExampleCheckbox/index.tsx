import { Checkbox } from '@amalgama/react-native-ui-kit';
import React, { useState } from 'react';

const ExampleCheckbox = () => {
	const [ isSelected, setSelected ] = useState( false );
	return (
		<Checkbox
			selected={ isSelected }
			onPress={ () => { setSelected( !isSelected ); } }
		/>
	);
};

export default ExampleCheckbox;
