import { useState } from 'react';

const useTogglePasswordIconButtonState = ( secureTextEntry: boolean ) => {
	const [ isPasswordHidden, setIsPasswordHidden ] = useState( secureTextEntry );
	const onIconPress = () => { setIsPasswordHidden( wasHidden => !wasHidden ); };

	return { isPasswordHidden, onIconPress };
};
export default useTogglePasswordIconButtonState;
