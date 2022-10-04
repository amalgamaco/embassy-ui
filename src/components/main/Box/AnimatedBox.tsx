import React, { forwardRef, memo } from 'react';
import { Animated, View } from 'react-native';
import type { ComponentProps } from '../../../core/styles/types';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { IAnimatedBoxProps } from './types';

const AnimatedBox = ( { children, ...props }: IAnimatedBoxProps, ref: React.Ref<View> ) => {
	const resolvedProps = useComponentPropsResolver( 'Box', props );
	const [ style, restProps ] = useStyleFromPropsResolver(
		'Box', resolvedProps as ComponentProps
	);

	return (
		<Animated.View
			ref={ref}
			style={style}
			{...restProps}
		>
			{children}
		</Animated.View>
	);
};

export default memo( forwardRef( AnimatedBox ) );
