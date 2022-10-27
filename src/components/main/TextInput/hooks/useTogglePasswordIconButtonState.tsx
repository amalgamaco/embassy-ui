import { useState } from 'react';
import type { ITextInputProps } from '../types';

type IUseTogglePasswordIconButtonStateReturnType = [
	boolean, boolean, () => void
];

const useTogglePasswordIconButtonState = (
	{ type }: { type: ITextInputProps['type'] }
): IUseTogglePasswordIconButtonStateReturnType => {
	const isPasswordField = type === 'password';
	const [ secureTextEntry, setSecureTextEntry ] = useState( isPasswordField );
	const onIconPress = () => { setSecureTextEntry( !secureTextEntry ); };

	return [ isPasswordField, secureTextEntry, onIconPress ];
};
export default useTogglePasswordIconButtonState;
