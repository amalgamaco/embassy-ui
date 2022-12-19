import React from 'react';
import { Box } from '@amalgama/embassy-ui';
import BrowserOnly from '@docusaurus/BrowserOnly';

const WrapInBrowserOnly = (
	children: JSX.Element,
	browserOnly: boolean
) => (
	browserOnly
		? (
			<BrowserOnly>
				{() => children}
			</BrowserOnly>
		)
		: children
);

const CodePreview = ( {
	children,
	padding = '10',
	alignItems = 'center',
	browserOnly = false
}: {
	children: JSX.Element, padding: string, alignItems: string, browserOnly: boolean
} ) => WrapInBrowserOnly(
	<Box
		flex={1}
		alignItems={alignItems}
		padding={padding}
		background="secondary.200"
		marginY="2"
		rounded="xl"
		style={{ zIndex: 100 }}
		__dark={{ background: 'neutral.800' }}
	>
		{children}
	</Box>,
	browserOnly
);

export default CodePreview;
