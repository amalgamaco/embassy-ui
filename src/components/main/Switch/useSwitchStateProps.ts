import { useMemo } from 'react';
import type { PressableProps } from 'react-native';
import { useIsFocused, useIsHovered, useIsPressed } from '../../hooks';
import type { IHoverableComponent } from '../../../core/components/types';

interface IUseSwitchStateProps {
	value?: string,
	disabled?: boolean,
	selected?: boolean,
	onPress?: PressableProps[ 'onPress' ],
	onPressIn?: PressableProps[ 'onPressIn' ],
	onPressOut?: PressableProps[ 'onPressOut' ],
	onHoverIn?: IHoverableComponent[ 'onHoverIn' ],
	onHoverOut?: IHoverableComponent[ 'onHoverOut' ],
	onFocus?: PressableProps[ 'onFocus' ],
	onBlur?: PressableProps[ 'onBlur' ]
}

const useSwitchStateProps = ( {
	disabled: isDisabled,
	selected: isSelected,
	onPress: onPressProp,
	...props
}: IUseSwitchStateProps ) => {
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	return useMemo(
		() => {
			const onPress = onPressProp;

			const state = {
				isSelected: !!isSelected,
				isDisabled: !!isDisabled,
				isPressed,
				isHovered,
				isFocused
			};

			const stateProps = {
				selected: !!isSelected,
				disabled: !!isDisabled,
				onPress,
				onPressIn,
				onPressOut,
				onHoverIn,
				onHoverOut,
				onFocus,
				onBlur
			};

			return { state, stateProps };
		},
		[
			isSelected, isDisabled, isPressed, isHovered, isFocused,
			onPressProp, onPressIn, onPressOut, onHoverIn, onHoverOut, onFocus, onBlur
		]
	);
};

export default useSwitchStateProps;
