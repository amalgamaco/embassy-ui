import { Radio } from '@amalgama/embassy-ui';
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
