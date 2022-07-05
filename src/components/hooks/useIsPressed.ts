import { useCallback, useState } from 'react';
import type { GestureResponderEvent, PressableProps } from 'react-native';

interface IUseIsPressedState {
	onPressIn?: PressableProps[ 'onPressIn' ],
	onPressOut?: PressableProps[ 'onPressOut' ]
}

const useIsPressed = ( {
	onPressIn: onPressInProp,
	onPressOut: onPressOutProp
}: IUseIsPressedState ) => {
	const [ isPressed, setIsPressed ] = useState( false );

	const onPressIn = useCallback( ( event: GestureResponderEvent ) => {
		setIsPressed( true );
		onPressInProp?.( event );
	}, [ setIsPressed, onPressInProp ] );

	const onPressOut = useCallback( ( event: GestureResponderEvent ) => {
		setIsPressed( false );
		onPressOutProp?.( event );
	}, [ setIsPressed, onPressOutProp ] );

	return { isPressed, onPressIn, onPressOut };
};

export default useIsPressed;
