import { useMemo } from 'react';
import { useIsFocused } from '../../hooks';
import { useComponentPropsResolver } from '../../../hooks';
import type { ITextInputProps } from './types';

interface IUseTextInputPropsResolverType {
	containerProps: ITextInputProps['__container'],
	iconProps: ITextInputProps['__icon'],
	textInputProps: ITextInputProps['__textInput'],
	restProps: Omit<ITextInputProps, '__icon' | '__container' | 'textInput'>
}

const useTextInputPropsResolver = ( props: ITextInputProps ): IUseTextInputPropsResolverType => {
	const { disabled } = props;
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isFocused
	} ), [ disabled, isFocused ] );

	const {
		__container: containerProps,
		__icon: iconProps,
		__textInput: textInputProps,
		...restProps
	} = useComponentPropsResolver( 'TextInput', props, state ) as ITextInputProps;

	restProps.onFocus = onFocus;
	restProps.onBlur = onBlur;
	restProps.editable = !disabled;

	return {
		containerProps, iconProps, textInputProps, restProps
	};
};

export default useTextInputPropsResolver;
