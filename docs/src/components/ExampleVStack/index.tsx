import React from 'react';
import { VStack } from '@amalgama/react-native-ui-kit';
import StackElement from '../StackElement';

const ExampleVStack = props => (
	<VStack {...props} borderWidth="xs" borderRadius="sm">
		<StackElement color="success.500" label="First" width={300} />
		<StackElement color="secondary.500" label="Second" width={300} />
		<StackElement color="warning.700" label="Third" width={300} />
	</VStack>
);

export default ExampleVStack;
