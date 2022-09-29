import React from 'react';
import { HStack } from '@amalgama/react-native-ui-kit';
import StackElement from '../StackElement';

const ExampleHStack = props => (
	<HStack {...props} borderWidth="xs" borderRadius="sm">
		<StackElement color="success.500" label="First" width={100} />
		<StackElement color="secondary.500" label="Second" width={100} />
		<StackElement color="warning.700" label="Third" width={100} />
	</HStack>
);

export default ExampleHStack;
