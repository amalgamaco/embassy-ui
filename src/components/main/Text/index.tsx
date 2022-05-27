import React from 'react';
import { Text as RNText } from 'react-native';
import useStyleFromPropsResolver from '../../../hooks/useStyleFromPropsResolver';
import type { ITextProps } from './types';

const Text = ( { children, ...props }: ITextProps ) => {
	const [ style, restProps ] = useStyleFromPropsResolver( 'Text', props );

	return (
		<RNText style={style} {...restProps} >
			{ children }
		</RNText>
	);
};

export default Text;
