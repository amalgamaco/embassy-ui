import { useMemo, useState } from 'react';
import { useIsFocused } from '../../hooks';
import { useComponentPropsResolver } from '../../../hooks';
import type { ITextInputProps } from './types';
import { TEXT_INPUT_PROP_NAMES } from './consts';
import type { IIconButtonProps } from '../IconButton/types';
import type { WithOptional } from '../../../core/types';
import { useFormControlContext } from '../FormControl/context';

interface IUseTextInputPropsResolverReturnType {
	containerProps: Omit<ITextInputProps, '__icon' | '__textInput'>,
	iconProps: WithOptional<IIconButtonProps, 'name'>,
	textInputProps: ITextInputProps['__textInput'],
	showPasswordToggleButton: boolean
}

interface ITextInputInternalProps extends Omit<ITextInputProps, '__icon'> {
	__icon: IIconButtonProps,
}

type IUseTogglePasswordIconButtonStateReturnType = [
	boolean, boolean, () => void
];

const useTextInputPropsFromContainerProps = ( textInputProps: any, containerProps: any ) => useMemo(
	() => {
		TEXT_INPUT_PROP_NAMES.forEach( ( propName ) => {
			textInputProps[ propName ] = containerProps[ propName ];
			delete containerProps[ propName ];
		} );

		return { textInputProps, containerProps };
	},
	[ textInputProps, containerProps ]
);

const useTogglePasswordIconButtonState = (
	{ type }: { type: ITextInputProps['type'] }
): IUseTogglePasswordIconButtonStateReturnType => {
	const isPasswordField = type === 'password';
	const [ secureTextEntry, setSecureTextEntry ] = useState( isPasswordField );
	const onIconPress = () => { setSecureTextEntry( !secureTextEntry ); };

	return [ isPasswordField, secureTextEntry, onIconPress ];
};

const useTextInputPropsResolver = ( {
	type = 'text',
	disabled: disabledProp = false,
	error: errorProp = false,
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

	textInputProps.onFocus = onFocus;
	textInputProps.onBlur = onBlur;
	textInputProps.disabled = disabled;
	textInputProps.editable = !disabled;
	textInputProps.secureTextEntry = secureTextEntry;
	iconProps.onPress = onIconPress;
	iconProps.disabled = disabled;

	return {
		containerProps, iconProps, textInputProps, showPasswordToggleButton
	};
};

export default useTextInputPropsResolver;
