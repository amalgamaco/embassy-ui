import React from 'react';
import { Box } from '@amalgama/embassy-ui';

const ColorPreview = ( { color } ) => (
	<Box
		width={50}
		height={25}
		bg={color}
	/>
);

export default ColorPreview;
