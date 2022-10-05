import React from 'react';
import { Box } from '@amalgama/embassy-ui';

const CodePreview = ( {
	children,
	padding = '10',
	alignItems = 'center'
}: { children: React.ReactNode, padding: string, alignItems: string } ) => (
	<Box
		flex={1}
		alignItems={alignItems}
		padding={padding}
		background="secondary.200"
		marginY="2"
		rounded="xl"
		__dark={{ background: 'neutral.800' }}
	>
		{children}
	</Box>
);

export default CodePreview;
