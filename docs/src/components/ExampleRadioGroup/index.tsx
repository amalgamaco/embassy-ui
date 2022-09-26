import React, { useState } from 'react';
import { Radio, Text, VStack } from '@amalgama/react-native-ui-kit';

const ExampleRadioGroup = ( { disabled = false }: { disabled?: boolean } ) => {
	const [ value, setValue ] = useState<string | undefined>();

	return (
		<VStack>
			<Text variant="sh1">
				What is your favorite coding language?
			</Text>
			<Radio.Group
				value={value}
				onChange={setValue}
				disabled={disabled}
			>
				<Radio value="js" label="Javascript" />
				<Radio value="ts" label="Typescript" />
				<Radio value="rb" label="Ruby" />
				<Radio value="python" label="Python" />
				<Radio value="c" label="C" />
				<Radio value="cpp" label="C++" />
			</Radio.Group>
		</VStack>
	);
};

export default ExampleRadioGroup;
