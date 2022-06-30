import { useCallback, useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { useTheme } from '../../../core/theme/hooks';
import type { IButtonProps } from './types';

export const useButtonPropsResolver = ( props: Omit<IButtonProps, 'children'> ) => {
	const theme = useTheme();

	const { disabled } = props;
	const [ isPressed, setIsPressed ] = useState( false );

	// TODO: Move isPressed logic to its own hook
	const onPressIn = useCallback( ( event: GestureResponderEvent ) => {
		setIsPressed( true );
		props.onPressIn?.( event );
	}, [ setIsPressed, props.onPressIn ] );

	const onPressOut = useCallback( ( event: GestureResponderEvent ) => {
		setIsPressed( false );
		props.onPressOut?.( event );
	}, [ setIsPressed, props.onPressOut ] );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isPressed
	} ), [ disabled, isPressed ] );

	const {
		__label: labelProps,
		__stack: stackProps,
		...containerProps
	} = useMemo<IButtonProps>( () => (
		theme?.resolvePropsFor( 'Button', props, state ) || {}
	), [ theme, props, state ] );

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return { containerProps, stackProps, labelProps };
};
