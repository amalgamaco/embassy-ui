/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useRef } from 'react';
import { Animated } from 'react-native';
import type { ComponentStyledProps } from '../../../../core/components/types';
import { useStyleFromPropsResolver } from '../../../../hooks';

interface IUseAnimationProps {
	containerProps: ComponentStyledProps<'Box'>,
	iconContainerProps: ComponentStyledProps<'Box'>,
	iconWrapperProps?: ComponentStyledProps<'Box'>,
	animationDuration?: number,
	animatedValue?: number,
}

const useSwitchAnimation = ( {
	containerProps, iconContainerProps, animationDuration = 500, animatedValue = 0
}: IUseAnimationProps ) => {
	const animation = useRef( new Animated.Value( animatedValue ) ).current;

	const selectedContainerStyle = useStyleFromPropsResolver( 'Box', containerProps )[ 0 ];
	const iconContainerStyle = useStyleFromPropsResolver( 'Box', iconContainerProps )[ 0 ];

	const { width = 0, borderWidth = 0, padding: iconPadding = 0 } = selectedContainerStyle;
	const { width: iconWidth = 0, margin: iconMargin = 0 } = iconContainerStyle;

	const widthBounds = width - iconWidth - 2 * ( borderWidth + iconMargin + iconPadding );

	const animateToValue = ( toValue: number ) => {
		Animated.timing( animation, {
			toValue,
			duration: animationDuration,
			useNativeDriver: false
		} ).start();
	};
	const startAnimation = () => animateToValue( 1 );

	const reverseAnimation = () => animateToValue( 0 );

	const position = animation.interpolate( {
		inputRange: [ 0, 1 ], outputRange: [ 0, widthBounds ], extrapolate: 'clamp'
	} );

	return {
		position, startAnimation, reverseAnimation
	};
};

export default useSwitchAnimation;
