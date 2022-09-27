import { useMemo } from 'react';
import type { PressableProps } from 'react-native';
import type { IHoverableComponent } from '../../../../core/components/types';
import { useIsFocused, useIsHovered, useIsPressed } from '../../../hooks';

interface IUseRadioStateProps {
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

const useRadioStateProps = ( {
	disabled = false,
	selected = false,
	onPress,
	...props
}: IUseRadioStateProps ) => {
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	return useMemo(
		() => {
			const state = {
				isSelected: selected,
				isDisabled: disabled,
				isPressed,
				isHovered,
				isFocused
			};

			const stateProps = {
				selected,
				disabled,
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
			selected, disabled, isPressed, isHovered, isFocused, onPress,
			onPressIn, onPressOut, onHoverIn, onHoverOut, onFocus, onBlur
		]
	);
};

export default useRadioStateProps;
