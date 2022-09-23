import { Radio } from '@amalgama/react-native-ui-kit';
import React, { useState } from 'react';

const ExampleRadio = () => {
	const [ isSelected, setSelected ] = useState( false );
	return (
		<Radio
			selected={ isSelected }
			onPress={ () => { setSelected( prev => !prev ); } }
		/>
	);
};

export default ExampleRadio;
