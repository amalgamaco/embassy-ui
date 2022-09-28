import { useCallback, useState } from 'react';
import type { PressableProps, TextInputProps } from 'react-native';

interface IUseIsFocusedState {
	onFocus?: PressableProps[ 'onFocus' ] | TextInputProps[ 'onFocus' ],
	onBlur?: PressableProps[ 'onBlur' ] | TextInputProps[ 'onBlur' ]
}

const useIsFocused = ( {
	onFocus: onFocusProp,
	onBlur: onBlurProp
}: IUseIsFocusedState ) => {
	const [ isFocused, setIsFocused ] = useState( false );

	const onFocus = useCallback( ( event ) => {
		onFocusProp?.( event );
		setIsFocused( true );
	}, [ setIsFocused ] );

	const onBlur = useCallback( ( event ) => {
		onBlurProp?.( event );
		setIsFocused( false );
	}, [ setIsFocused ] );

	return { isFocused, onFocus, onBlur };
};

export default useIsFocused;
