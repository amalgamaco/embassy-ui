import type { ITextInputProps } from '../TextInput/types';

interface IPasswordInputProps extends Omit<ITextInputProps, 'icon' | 'onIconPress'> {
	showPasswordIcon?: JSX.Element;
	defaultSecure?: boolean;
	isNewPassword?: boolean;
	hidePasswordIcon?: JSX.Element;
}

export default IPasswordInputProps;
