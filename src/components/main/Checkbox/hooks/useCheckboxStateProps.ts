import { useMemo } from 'react';
import type { PressableProps } from 'react-native';
import type { IHoverableComponent } from '../../../../core/components/types';
import { useIsFocused, useIsHovered, useIsPressed } from '../../../hooks';
import useCheckboxStateFromGroup from './useCheckboxStateFromGroup';

interface IUseCheckboxStateProps {
	value?: string,
	disabled?: boolean,
	selected?: boolean,
	indeterminated?: boolean,
	onPress?: PressableProps[ 'onPress' ],
	onPressIn?: PressableProps[ 'onPressIn' ],
	onPressOut?: PressableProps[ 'onPressOut' ],
	onHoverIn?: IHoverableComponent[ 'onHoverIn' ],
	onHoverOut?: IHoverableComponent[ 'onHoverOut' ],
	onFocus?: PressableProps[ 'onFocus' ],
	onBlur?: PressableProps[ 'onBlur' ]
}

const useCheckboxStateProps = ( {
	value,
	disabled: disabledProp = false,
	selected: selectedProp = false,
	indeterminated = false,
	onPress: onPressProp,
	...props
}: IUseCheckboxStateProps ) => {
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const groupState = useCheckboxStateFromGroup( value );

	return useMemo(
		() => {
			const disabled = groupState?.disabled || disabledProp;
			const selected = groupState?.selected || selectedProp;
			const onPress = groupState?.onPress || onPressProp;

			const state = {
				isSelected: selected,
				isIndeterminated: indeterminated,
				isDisabled: disabled,
				isPressed,
				isHovered,
				isFocused
			};

			const stateProps = {
				selected,
				indeterminated,
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
			indeterminated, onPressProp, onPressIn, onPressOut, onHoverIn, onHoverOut,
			onFocus, onBlur
		]
	);
};

export default useCheckboxStateProps;
