import React from 'react';
import Stack from './Stack';
import type { IHStackProps } from './types';

const HStack = ( { children, ...props }: IHStackProps ) => (
	<Stack direction="row" {...props}>{children}</Stack>
);

export default HStack;
