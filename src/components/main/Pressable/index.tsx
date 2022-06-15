import React, { forwardRef, memo } from 'react';
import { Pressable as RNPressable } from 'react-native';
import useStyleFromPropsResolver from '../../../hooks/useStyleFromPropsResolver';
import type { IPressableProps } from './types';

const Pressable = ( { children, ...props }: IPressableProps, ref: any ) => {
	const [ style, restProps ] = useStyleFromPropsResolver( 'Pressable', props );

	return (
		<RNPressable
			ref={ref}
			style={style}
			{...restProps}
		>
			{children}
		</RNPressable>
	);
};

export default memo( forwardRef( Pressable ) );
