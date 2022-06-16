import React from 'react';
import { View } from 'react-native';
import useStyleFromPropsResolver from '../../../hooks/useStyleFromPropsResolver';
import type { IBoxProps } from './types';

const Box = ( { children, ...props }: IBoxProps ) => {
	const [ style, restProps ] = useStyleFromPropsResolver( 'Box', props );

	return (
		<View style={style} {...restProps} >
			{ children }
		</View>
	);
};

export default Box;
