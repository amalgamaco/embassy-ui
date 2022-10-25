import React from 'react';
import { VStack } from '@amalgama/embassy-ui';
import StackElement from '../StackElement';

const ExampleVStack = props => (
	<VStack {...props} borderWidth="xs" borderRadius="sm" borderColor="primary.300">
		<StackElement color="success.300" label="First" width={300} />
		<StackElement color="warning.300" label="Second" width={300} />
		<StackElement color="error.300" label="Third" width={300} />
	</VStack>
);

export default ExampleVStack;
