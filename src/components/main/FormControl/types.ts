import type { ComponentStyledProps } from '../../../core/components/types';
import type { ITextProps } from '../Text/types';

export interface IFormControlProps extends ComponentStyledProps<'FormControl'> {
	label?: string,
	hint?: string,
	error?: string,
	errorIcon?: string,
	isRequired?: boolean,
	children?: JSX.Element | JSX.Element[] | string,
	testID?: string
}

export interface IFormControlLabelProps extends ITextProps {
	text: string,
	isRequired?: boolean,

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
