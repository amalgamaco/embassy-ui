/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMemo } from 'react';
import { useIsFocused } from '../../../hooks';
import { useComponentPropsResolver } from '../../../../hooks';
import type { ITextInputProps } from '../types';
import type { IIconButtonProps } from '../../IconButton/types';
import { useFormControlContext } from '../../FormControl/context';
import useTextInputPropsFromContainerProps from './useTextInputPropsFromContainerProps';

interface IUseTextInputPropsResolverReturnType {
	containerProps: Omit<ITextInputProps, '__icon' | '__textInput'>,
	iconProps: Omit<IIconButtonProps, 'name' | 'as'>,
	textInputProps: ITextInputProps['__textInput'],
}

interface ITextInputInternalProps extends Omit<ITextInputProps, 'withIcon' | '__icon'> {
	__icon: IIconButtonProps,
}

type IUseTextInputPropsResolverProps = Omit<ITextInputProps, 'withIcon' | 'icon' >

const useTextInputPropsResolver = ( {
	disabled: disabledProp = false,
	error: errorProp = false,
	onIconPress,
	...props
}: IUseTextInputPropsResolverProps ): IUseTextInputPropsResolverReturnType => {
	const { isFocused, onFocus, onBlur } = useIsFocused( props );
	const formControlState = useFormControlContext();

	const disabled = formControlState?.disabled || disabledProp;
	const error = formControlState?.hasError || errorProp;

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

	textInputProps.onFocus = onFocus;
	textInputProps.onBlur = onBlur;
	textInputProps.disabled = disabled;
	textInputProps.editable = !disabled;
	iconProps.disabled = disabled;
	iconProps.onPress = onIconPress;

	return {
		containerProps,
		iconProps,
		textInputProps: textInputProps as ITextInputProps
	};
};

export default useTextInputPropsResolver;
