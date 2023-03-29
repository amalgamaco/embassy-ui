import React, { useState } from 'react';
import { Checkbox, Text, VStack } from '@amalgamaco/embassy-ui';

const ExampleCheckboxGroup = ( { disabled = false }: { disabled?: boolean } ) => {
	const [ value, setValue ] = useState( [] );

	return (
		<VStack>
			<Text variant="sh1">
				What are your favorite coding languages?
			</Text>
			<Checkbox.Group
				value={value}
				onChange={setValue}
				disabled={disabled}
			>
				<Checkbox value="js" label="Javascript" />
				<Checkbox value="ts" label="Typescript" />
				<Checkbox value="rb" label="Ruby" />
				<Checkbox value="python" label="Python" />
				<Checkbox value="c" label="C" />
				<Checkbox value="cpp" label="C++" />
			</Checkbox.Group>
		</VStack>
	);
};

export default ExampleCheckboxGroup;
