import React from 'react';
import { HStack } from '../Stack';
import type { IHStackProps } from '../Stack/types';
import { useCardActionsPropsResolver } from './hooks';

const CardActions = ( { children, testID, ...props }: IHStackProps ) => {
	const cardActionsProps = useCardActionsPropsResolver( props );
	return (
		<HStack testID={testID} {...cardActionsProps}>
			{children}
		</HStack>
	);
};

export default CardActions;
