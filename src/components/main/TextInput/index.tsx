import React from 'react';
import { TextInput as TextInputRN } from 'react-native';
import UIKitIcon from '../../../icons/UIKitIcon';
import { HStack } from '../Stack';
import useTextInputPropsResolver from './hooks';
import type { ITextInputProps } from './types';
import IconButton from '../IconButton';
import useTranslatePropsToStyle from '../../../hooks/useTranslatePropsToStyle';
import Box from '../Box';

const TextInput = ( props: ITextInputProps ) => {
	const {
		containerProps, textInputProps, iconProps, showPasswordToggleButton
	} = useTextInputPropsResolver( props );

	const [ style, restProps ] = useTranslatePropsToStyle( textInputProps );
	return (
		<Box {...containerProps}>
			<HStack width="100%" height="100%" alignItems="center">
				<TextInputRN style={style} {...restProps} testID={`${props.testID}-rn`}/>
				{showPasswordToggleButton && (
					<IconButton
						name="eye"
						as={UIKitIcon}
						testID={`${props.testID}-icon`}
						{...iconProps}
					/>
				)}
			</HStack>
		</Box>
	);
};

export default TextInput;
