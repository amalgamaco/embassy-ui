import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { IBoxProps } from './types';

const Box = ( { children, ...props }: IBoxProps, ref: any ) => {
	const resolvedProps = useComponentPropsResolver( 'Box', props );
	const [ style, restProps ] = useStyleFromPropsResolver( 'Box', resolvedProps );

	return (
		<View
			ref={ref}
			style={style}
			{...restProps}
		>
			{ children }
		</View>
	);
};

export default memo( forwardRef( Box ) );
