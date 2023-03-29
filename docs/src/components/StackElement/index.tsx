import React from 'react';
import { Box, Text } from '@amalgamaco/embassy-ui';

const StackElement = ( { color, label, width = undefined } ) => (
	<Box
		bg={color}
		width={width}
		borderRadius="sm"
		padding="1"
		margin="2"
		alignItems="center"
		paddingY="4"
	>
		<Text color="text-secondary">{label}</Text>
	</Box>
);

export default StackElement;
