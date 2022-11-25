import type { TextInputProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';
import type { IIconProps } from '../Icon/types';

export interface ITextInputProps extends Omit<ComponentStyledProps<'TextInput'>, 'textAlign'>, TextInputProps {
	disabled?: boolean,
	error?: boolean,
	icon?: JSX.Element,
	onIconPress?: () => void,

	__icon?: IIconProps
}
