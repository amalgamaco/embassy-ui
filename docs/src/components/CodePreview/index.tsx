import React from 'react';
import { Box } from '@amalgama/react-native-ui-kit';

const CodePreview = ( {
	children,
	padding = '10',
	alignItems = 'center'
}: { children: any, padding: string, alignItems: string } ) => (
	<Box
		flex={1}
		alignItems={alignItems}
		padding={padding}
		background="secondary.200"
		marginY="2"
		rounded="xl"
	>
		{children}
	</Box>
);

export default CodePreview;
