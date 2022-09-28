import React from 'react';
import { Box, Text } from '@amalgama/react-native-ui-kit';

const StackElement = ( { color, label, width = undefined } ) => (
	<Box
		bg={color}
		width={width}
		borderRadius="sm"
		padding="1"
		margin="1"
		alignItems="center"
		borderWidth="xs"
	>
		<Text>{label}</Text>
	</Box>
);

export default StackElement;
