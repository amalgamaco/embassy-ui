import { useMemo } from 'react';
import { useIsFocused } from '../../hooks';
import { useComponentPropsResolver } from '../../../hooks';
import type { ITextInputProps } from './types';

interface IUseTextInputPropsResolverType {
	containerProps: Omit<ITextInputProps, '__icon' | '__textInput'>,
	iconProps: ITextInputProps['__icon'],
	textInputProps: ITextInputProps['__textInput']
}

const TEXT_INPUT_PROP_NAMES = [ 'value', 'onChange', 'multiline', 'placeholder', 'disabled',
	'secureTextEntry', 'editable' ];

const useTextInputPropsFromContainerProps = ( textInputProps: any, containerProps: any ) => {
	TEXT_INPUT_PROP_NAMES.forEach( ( propName ) => {
		textInputProps[ propName ] = containerProps[ propName ];
		delete containerProps[ propName ];
	} );

	return { textInputProps, containerProps };
};

const useTextInputPropsResolver = ( props: ITextInputProps ): IUseTextInputPropsResolverType => {
	const { disabled } = props;
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isFocused
	} ), [ disabled, isFocused ] );

	const {
		__icon: iconProps,
		__textInput: baseTextInputProps,
		...restProps
	} = useComponentPropsResolver( 'TextInput', props, state ) as ITextInputProps;

	restProps.onFocus = onFocus;
	restProps.onBlur = onBlur;
	restProps.editable = !disabled;
	restProps.secureTextEntry = props.type === 'password';

	const { textInputProps, containerProps } = useTextInputPropsFromContainerProps(
		baseTextInputProps, restProps
	);

	return {
		containerProps, iconProps, textInputProps
	};
};

export default useTextInputPropsResolver;
