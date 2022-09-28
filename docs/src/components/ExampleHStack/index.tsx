import React from 'react';
import { HStack, Text } from '@amalgama/react-native-ui-kit';

const ExampleHStack = props => (
	<HStack {...props}>
		<Text bg="success.900">First</Text>
		<Text bg="secondary.900">Second</Text>
		<Text bg="error.900">Third</Text>
	</HStack>
);

export default ExampleHStack;
