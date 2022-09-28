import { TextInput } from '@amalgama/react-native-ui-kit';
import React, { useState } from 'react';

const ExampleTextInput = () => {
	const [ text, setText ] = useState( '' );

	return (
		<TextInput
			placeholder="Enter a text"
			value={text}
			onChangeText={setText}
			width="300px"
		/>
	);
};

export default ExampleTextInput;
