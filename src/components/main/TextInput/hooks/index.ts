/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMemo } from 'react';
import { useIsFocused } from '../../../hooks';
import { useComponentPropsResolver } from '../../../../hooks';
import type { ITextInputProps } from '../types';
import type { IIconButtonProps } from '../../IconButton/types';
import { useFormControlContext } from '../../FormControl/context';
import useTogglePasswordIconButtonState from './useTogglePasswordIconButtonState';
import useTextInputPropsFromContainerProps from './useTextInputPropsFromContainerProps';
import usePasswordIcon from './usePasswordIcon';

interface IUseTextInputPropsResolverReturnType {
	icon: JSX.Element,
	containerProps: Omit<ITextInputProps, '__icon' | '__textInput'>,
	iconProps: Omit<IIconButtonProps, 'name' | 'as'>,
	textInputProps: ITextInputProps['__textInput'],
	showPasswordToggleButton: boolean
}

interface ITextInputInternalProps extends Omit<ITextInputProps, '__icon'> {
	__icon: IIconButtonProps,
}

const useTextInputPropsResolver = ( {
	type = 'text',
	disabled: disabledProp = false,
	error: errorProp = false,
	showPasswordIcon,
	hidePasswordIcon,
	...props
}: ITextInputProps ): IUseTextInputPropsResolverReturnType => {
	const { isFocused, onFocus, onBlur } = useIsFocused( props );
	const formControlState = useFormControlContext();

	const disabled = formControlState?.disabled || disabledProp;
	const error = formControlState?.hasError || errorProp;

	const [
		showPasswordToggleButton, secureTextEntry, onIconPress
	] = useTogglePasswordIconButtonState( { type } );

	const state = useMemo( () => ( {
		isDisabled: disabled,
		hasError: error,
		isFocused
	} ), [ disabled, error, isFocused ] );

	const {
		__icon: iconProps,
		__textInput: baseTextInputProps,
		...restProps
	} = useComponentPropsResolver( 'TextInput', props, state ) as ITextInputInternalProps;

	const { textInputProps, containerProps } = useTextInputPropsFromContainerProps(
		baseTextInputProps, restProps
	);

	const icon = usePasswordIcon( {
		showPasswordIcon,
		hidePasswordIcon,
		isPasswordHidden: secureTextEntry
	} );

	textInputProps.onFocus = onFocus;
	textInputProps.onBlur = onBlur;
	textInputProps.disabled = disabled;
	textInputProps.editable = !disabled;
	textInputProps.secureTextEntry = secureTextEntry;
	iconProps.onPress = onIconPress;
	iconProps.disabled = disabled;

	return {
		icon,
		containerProps,
		iconProps,
		textInputProps: textInputProps as ITextInputProps,
		showPasswordToggleButton
	};
};

export default useTextInputPropsResolver;
