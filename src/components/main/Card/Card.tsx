import React from 'react';
import Box from '../Box';
import type { IBoxProps } from '../Box/types';
import { useCardPropsResolver } from './hooks';

const Card = ( { children, testID, ...props }: IBoxProps ) => {
	const cardProps = useCardPropsResolver( props );
	return (
		<Box testID={testID} {...cardProps}>
			{children}
		</Box>
	);
};

export default Card;
