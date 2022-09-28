import React from 'react';
import { VStack, Text } from '@amalgama/react-native-ui-kit';

const ExampleVStack = props => (
	<VStack {...props}>
		<Text bg="success.900">First</Text>
		<Text bg="secondary.900">Second</Text>
		<Text bg="error.900">Third</Text>
	</VStack>
);

export default ExampleVStack;
