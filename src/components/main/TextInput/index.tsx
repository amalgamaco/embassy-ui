import React from 'react';
import { TextInput as TextInputRN } from 'react-native';
import UIKitIcon from '../../../icons/UIKitIcon';
import { HStack } from '../Stack';
import useTextInputPropsResolver from './hooks';
import type { ITextInputProps } from './types';
import IconButton from '../IconButton';
import useTranslatePropsToStyle from '../../../hooks/useTranslatePropsToStyle';

const passwordIcon = <IconButton name='eye' as={UIKitIcon} />;

const TextInput = ( props: ITextInputProps ) => {
	const {
		containerProps, textInputProps, iconProps
	} = useTextInputPropsResolver( props );

	const [ style, restProps ] = useTranslatePropsToStyle( textInputProps );
	return (
		<HStack {...containerProps}>
			<TextInputRN style={style} {...restProps} testID={`${props.testID}-rn`}/>
			{props.type === 'password' && React.cloneElement( props.passwordIcon || passwordIcon, iconProps )}
		</HStack>

	);
};

export default TextInput;
