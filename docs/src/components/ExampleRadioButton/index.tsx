import { RadioButton } from '@amalgama/react-native-ui-kit';
import React, { useState } from 'react';

const ExampleRadioButton = () => {
	const [ isSelected, setSelected ] = useState( false );
	return (
		<RadioButton
			selected={ isSelected }
			onPress={ () => { setSelected( prev => !prev ); } }
		/>
	);
};

export default ExampleRadioButton;
