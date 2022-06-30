import React from 'react';
import { Text as RNText } from 'react-native';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { ITextProps } from './types';

const Text = ( { children, ...props }: ITextProps ) => {
	const resolvedProps = useComponentPropsResolver( 'Text', props );
	const [ style, restProps ] = useStyleFromPropsResolver( 'Text', resolvedProps );

	return (
		<RNText style={style} {...restProps} >
			{ children }
		</RNText>
	);
};

export default Text;
