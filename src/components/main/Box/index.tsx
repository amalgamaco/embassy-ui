import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import useStyleFromPropsResolver from '../../../hooks/useStyleFromPropsResolver';
import type { IBoxProps } from './types';

const Box = ( { children, ...props }: IBoxProps, ref: any ) => {
	const [ style, restProps ] = useStyleFromPropsResolver( 'Box', props );

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
