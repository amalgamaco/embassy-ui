import React, { forwardRef } from 'react';
import { Pressable as RNPressable, View } from 'react-native';
import type { ComponentProps } from '../../../core/styles/types';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { IPressableProps } from './types';

const Pressable = ( {
	children, ...props
}: IPressableProps, ref: React.Ref<View> ) => {
	const resolvedProps = useComponentPropsResolver( 'Pressable', props );
	const [ style, restProps ] = useStyleFromPropsResolver(
		'Pressable', resolvedProps as ComponentProps
	);

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

export default forwardRef( Pressable );
