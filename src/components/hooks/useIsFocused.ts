import { useCallback, useState } from 'react';
import type {
	NativeSyntheticEvent, TargetedEvent, TextInputFocusEventData
} from 'react-native';

type EventType = TargetedEvent| TextInputFocusEventData;

interface IUseIsFocusedState<E extends EventType> {
	onFocus?: ( ( event: NativeSyntheticEvent<E> ) => void ) | null,
	onBlur?: ( ( event: NativeSyntheticEvent<E> ) => void ) | null
}

const useIsFocused = <E extends EventType>( {
	onFocus: onFocusProp,
	onBlur: onBlurProp
}: IUseIsFocusedState<E> ) => {
	const [ isFocused, setIsFocused ] = useState( false );

	const onFocus = useCallback( ( event: NativeSyntheticEvent<E> ) => {
		onFocusProp?.( event );
		setIsFocused( true );
	}, [ setIsFocused, onFocusProp ] );

	const onBlur = useCallback( ( event: NativeSyntheticEvent<E> ) => {
		onBlurProp?.( event );
		setIsFocused( false );
	}, [ setIsFocused, onBlurProp ] );

	return { isFocused, onFocus, onBlur };
};

export default useIsFocused;
