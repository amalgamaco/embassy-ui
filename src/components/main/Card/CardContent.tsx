import React from 'react';
import { VStack } from '../Stack';
import type { IVStackProps } from '../Stack/types';
import { useCardContentPropsResolver } from './hooks';

const CardContent = ( { children, testID, ...props }: IVStackProps ) => {
	const cardContentProps = useCardContentPropsResolver( props );
	return (
		<VStack testID={testID} {...cardContentProps}>
			{children}
		</VStack>
	);
};

export default CardContent;
