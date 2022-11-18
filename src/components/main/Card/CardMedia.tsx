import React from 'react';
import Box from '../Box';
import type { IBoxProps } from '../Box/types';
import { useCardMediaPropsResolver } from './hooks';

const CardMedia = ( { children, ...props }: IBoxProps ) => {
	const cardMediaProps = useCardMediaPropsResolver( props );
	return (
		<Box alignItems="center" justifyContent={'center'} {...cardMediaProps}>
			{children}
		</Box> );
};

export default CardMedia;
