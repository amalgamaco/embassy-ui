import React from 'react';
import TextInput from '../TextInput';
import { usePasswordIcon, useTogglePasswordIconButtonState } from './hooks';
import type IPasswordInputProps from './types';

const PasswordInput = ( {
	showPasswordIcon,
	hidePasswordIcon,
	isNewPassword = false,
	defaultSecure = true,
	...props
}: IPasswordInputProps ) => {
	const { isPasswordHidden, onIconPress } = useTogglePasswordIconButtonState( defaultSecure );
	const icon = usePasswordIcon( { isPasswordHidden, showPasswordIcon, hidePasswordIcon } );
	return (
		<TextInput
			autoCapitalize="none"
			autoCompleteType="password"
			textContentType={isNewPassword ? 'newPassword' : 'password'}
			autoCorrect={false}
			spellCheck={false}
			secureTextEntry={isPasswordHidden}
			icon={icon}
			onIconPress={onIconPress}
			{...props} />
	);
};

export default PasswordInput;
