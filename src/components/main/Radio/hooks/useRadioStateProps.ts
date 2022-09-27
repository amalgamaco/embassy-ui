import { useMemo } from 'react';
import type { PressableProps } from 'react-native';
import type { IHoverableComponent } from '../../../../core/components/types';
import { useIsFocused, useIsHovered, useIsPressed } from '../../../hooks';
import useRadioStateFromGroup from './useRadioStateFromGroup';

interface IUseRadioStateProps {
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

const useRadioStateProps = ( {
	value,
	disabled: disabledProp = false,
	selected: selectedProp = false,
	onPress: onPressProp,
	...props
}: IUseRadioStateProps ) => {
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const groupState = useRadioStateFromGroup( value );

	return useMemo(
		() => {
			const disabled = groupState?.disabled || disabledProp;
			const selected = groupState?.selected || selectedProp;
			const onPress = groupState?.onPress || onPressProp;

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
			groupState, selectedProp, disabledProp, isPressed, isHovered, isFocused,
			onPressProp, onPressIn, onPressOut, onHoverIn, onHoverOut, onFocus, onBlur
		]
	);
};

export default useRadioStateProps;
