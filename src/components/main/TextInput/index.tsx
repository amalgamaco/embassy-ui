import React from 'react';
import { TextInput as TextInputRN } from 'react-native';
import UIKitIcon from '../../../icons/UIKitIcon';
import { HStack } from '../Stack';
import useTextInputPropsResolver from './hooks';
import type { ITextInputProps } from './types';
import IconButton from '../IconButton';
import useTranslatePropsToStyle from '../../../hooks/useTranslatePropsToStyle';
import ConditionalRender from '../../utils/ConditionalRender';
import Box from '../Box';

const TextInput = ( { testID, ...props }: ITextInputProps ) => {
	const {
		containerProps, textInputProps, iconProps, showPasswordToggleButton
	} = useTextInputPropsResolver( props );

	const [ style, restProps ] = useTranslatePropsToStyle( textInputProps );
	return (
		<Box {...containerProps} testID={testID}>
			<HStack width="100%" height="100%" alignItems="center">
				<TextInputRN
					testID={testID ? `${testID}-rn` : undefined}
					style={style}
					{...restProps}
				/>
				<ConditionalRender render={showPasswordToggleButton}>
					<IconButton
						name="eye"
						as={UIKitIcon}
						testID={testID ? `${testID}-icon` : undefined}
						{...iconProps}
					/>
				</ConditionalRender>
			</HStack>
		</Box>
	);
};

export default TextInput;
