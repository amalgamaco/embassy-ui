import { Radio } from '@amalgamaco/embassy-ui';
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
