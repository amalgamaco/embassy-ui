import { Checkbox } from '@amalgamaco/embassy-ui';
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
