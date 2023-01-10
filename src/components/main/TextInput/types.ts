import type { Ref } from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';
import type { IIconProps } from '../Icon/types';

export interface ITextInputProps extends Omit<ComponentStyledProps<'TextInput'>, 'textAlign'>,
	Omit<TextInputProps, 'placeholderTextColor'>
{
	ref?: Ref<TextInput | undefined>,
	disabled?: boolean,
	error?: boolean,
	icon?: JSX.Element,
	onIconPress?: () => void,

	__icon?: IIconProps
}
