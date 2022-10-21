import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { ComponentProps } from '../../../core/styles/types';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { IBoxProps } from './types';

const Box = ( { children, ...props }: IBoxProps, ref?: React.Ref<View> ) => {
	const resolvedProps = useComponentPropsResolver( 'Box', props );
	const [ style, restProps ] = useStyleFromPropsResolver(
		'Box', resolvedProps as ComponentProps
	);

	return (
		<View
			ref={ref}
			style={style}
			{...restProps}
		>
			{children}
		</View>
	);
};

export default forwardRef( Box );
