import React from 'react';
import { TextInput as TextInputRN } from 'react-native';
import UIKitIcon from '../../../icons/UIKitIcon';
import { useStyleFromPropsResolver } from '../../../hooks';
import { HStack } from '../Stack';
import useTextInputPropsResolver from './hooks';
import type { ITextInputProps } from './types';
import IconButton from '../IconButton';

const passwordIcon = <IconButton name='eye' as={UIKitIcon} />;

const TextInput = ( props: ITextInputProps ) => {
	const {
		containerProps, textInputProps, iconProps, restProps
	} = useTextInputPropsResolver( props );
	const [ style ] = useStyleFromPropsResolver( 'TextInput', textInputProps || {} );
	return (
		<HStack {...containerProps} testID={`${props.testID}-container`}>
			<TextInputRN style={style} {...restProps}/>
			{props.isPassword && React.cloneElement( props.passwordIcon || passwordIcon, iconProps )}
		</HStack>

	);
};

export default TextInput;
