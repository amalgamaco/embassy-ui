import { useCallback, useState } from 'react';
import type { PressableProps, NativeSyntheticEvent, TargetedEvent } from 'react-native';

interface IUseIsFocusedState {
	onFocus?: PressableProps[ 'onFocus' ],
	onBlur?: PressableProps[ 'onBlur' ]
}

const useIsFocused = ( {
	onFocus: onFocusProp,
	onBlur: onBlurProp
}: IUseIsFocusedState ) => {
	const [ isFocused, setIsFocused ] = useState( false );

	const onFocus = useCallback( ( event: NativeSyntheticEvent<TargetedEvent> ) => {
		onFocusProp?.( event );
		setIsFocused( true );
	}, [ setIsFocused ] );

	const onBlur = useCallback( ( event: NativeSyntheticEvent<TargetedEvent> ) => {
		onBlurProp?.( event );
		setIsFocused( false );
	}, [ setIsFocused ] );

	return { isFocused, onFocus, onBlur };
};

export default useIsFocused;
