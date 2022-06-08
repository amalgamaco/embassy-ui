import React from 'react';
import Stack from './Stack';
import type { IVStackProps } from './types';

const VStack = ( { children, ...props }: IVStackProps ) => (
	<Stack direction="column" {...props}>{children}</Stack>
);

export default VStack;
