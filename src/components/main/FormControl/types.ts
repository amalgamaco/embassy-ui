import type { ComponentStyledProps } from '../../../core/components/types';
import type { IIconProps } from '../Icon/types';
import type { ITextProps } from '../Text/types';

export interface IFormControlProps extends ComponentStyledProps<'FormControl'> {
	label?: string,
	hint?: string,
	error?: string,
	errorIcon?: string,
	disabled?: boolean,
	isRequired?: boolean,
	onInfoIconPress?: () => void,
	onInfoIconHoverIn?: () => void,
	onInfoIconHoverOut?: () => void,
	showInfoIcon?: boolean,
	infoIcon?: JSX.Element,
	children?: JSX.Element | JSX.Element[] | string,
	testID?: string
}

export interface IFormControlLabelProps extends ITextProps {
	text: string,
	isRequired?: boolean,
	infoIcon?: JSX.Element,
	onInfoIconPress?: () => void,
	onInfoIconHoverIn?: () => void,
	onInfoIconHoverOut?: () => void,
	showInfoIcon?: boolean,

	__infoIcon?: Omit<IIconProps, 'name'>
	__required?: Omit<ITextProps, 'children'>
}

export interface IFormControHelperTextProps {
	hint?: string,
	error?: string,
	errorIcon?: string,

	__hintText?: IFormControlProps['__hintText'],
	__errorText?: IFormControlProps['__errorText'],
	__errorIcon?: IFormControlProps['__errorIcon'],

	testID?: string
}

export interface IFormControlContext {
	disabled: boolean,
	hasError: boolean
}
