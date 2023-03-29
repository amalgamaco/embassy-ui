import React from 'react';
import { HStack } from '@amalgamaco/embassy-ui';
import StackElement from '../StackElement';

const ExampleHStack = props => (
	<HStack {...props} borderWidth="xs" borderRadius="sm" borderColor="primary.300">
		<StackElement color="success.300" label="First" width={140} />
		<StackElement color="warning.300" label="Second" width={140} />
		<StackElement color="error.300" label="Third" width={140} />
	</HStack>
);

export default ExampleHStack;
