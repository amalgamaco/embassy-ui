import React, { forwardRef, memo } from 'react';
import { Pressable as RNPressable } from 'react-native';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { IPressableProps } from './types';

const Pressable = ( { children, ...props }: IPressableProps, ref: any ) => {
	const resolvedProps = useComponentPropsResolver( 'Pressable', props );
	const [ style, restProps ] = useStyleFromPropsResolver( 'Pressable', resolvedProps );

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
