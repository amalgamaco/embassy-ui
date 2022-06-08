import React from 'react';
import useSpacedChildren from '../../../hooks/useSpacedChildren';
import { useTheme } from '../../../core/theme/hooks';
import Box from '../Box';
import type { IStackProps } from './types';

const Stack = ( {
	children,
	direction: directionProp,
	space,
	reversed = false,
	...props
}: IStackProps ) => {
	const theme = useTheme();

	const defaultProps = {
		...{ direction: 'column', reversed: false },
		...( theme?.defaultPropsFor( 'Stack' ) || {} )
	};
	const direction = directionProp || defaultProps.direction;

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
			{...props}
			flexDirection={flexDirection}
		>
			{spacedChildren}
		</Box>
	);
};

export default Stack;
