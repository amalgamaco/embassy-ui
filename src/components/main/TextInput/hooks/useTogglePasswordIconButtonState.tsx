import { useState } from 'react';

const useTogglePasswordIconButtonState = () => {
	const [ isPasswordHidden, setIsPasswordHidden ] = useState( true );
	const onIconPress = () => { setIsPasswordHidden( wasHidden => !wasHidden ); };

	return { isPasswordHidden, onIconPress };
};
export default useTogglePasswordIconButtonState;
