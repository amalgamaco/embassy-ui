import React from 'react';
import { useComponentPropsResolver, useSpacedChildren } from '../../../hooks';
import Box from '../Box';
import type { IStackProps } from './types';

const Stack = ( {
	children,
	...props
}: IStackProps ) => {
	const {
		space,
		direction,
		reversed,
		...restProps
	} = useComponentPropsResolver( 'Stack', props ) as Omit<IStackProps, 'children'>;

	const flexDirection = (
		reversed ? `${direction}-reverse` : direction
	) as IStackProps[ 'flexDirection' ];

	const spacedChildren = useSpacedChildren( {
		children, direction, space
	} );

	return (
		<Box
			flex={1}
			alignContent='stretch'
			{...restProps}
			flexDirection={flexDirection}
		>
			{spacedChildren}
		</Box>
	);
};

export default Stack;
