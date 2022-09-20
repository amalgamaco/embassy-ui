import React from 'react';
import { TextInput as TextInputRN } from 'react-native';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { ITextInputProps } from './types';

const TextInput = ( props: ITextInputProps ) => {
	const resolvedProps = useComponentPropsResolver( 'TextInput', props );
	const [ style, restProps ] = useStyleFromPropsResolver( 'TextInput', resolvedProps );
	return <TextInputRN style={style} {...restProps}/>;
};

export default TextInput;
