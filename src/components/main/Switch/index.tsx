import React, {
	cloneElement, useCallback, useState
} from 'react';
import Pressable from '../Pressable';
import { useSwitchPropsResolver, useSwitchAnimation } from './hooks';
import type { ISwitchProps } from './types';
import Box from '../Box';

const Switch = ( {
	initialValue = false,
	withIcon = true,
	animationDuration,
	onChange,
	testID,
	...props
}: ISwitchProps ) => {
	const [ isOn, setIsOn ] = useState( initialValue );

	const {
		icon, iconProps, iconContainerProps, containerProps, switchContainerProps
	} = useSwitchPropsResolver( {
		selected: isOn,
		...props
	} );

	const { position, startAnimation, reverseAnimation } = useSwitchAnimation( {
		containerProps,
		iconContainerProps: iconContainerProps || {},
		animationDuration,
		animatedValue: initialValue ? 1 : 0
	} );

	const toggle = useCallback( () => {
		setIsOn( ( wasOn ) => {
			if ( wasOn ) {
				reverseAnimation();
			} else {
				startAnimation();
			}
			onChange?.( !wasOn );
			return !wasOn;
		} );
	}, [ startAnimation, reverseAnimation, onChange ] );

	return (
		<Box {...switchContainerProps}>
			<Pressable {...containerProps} onPress={toggle} testID={testID}>
				<Box.Animated {...iconContainerProps} style={{ marginLeft: position }}>
					{withIcon && cloneElement( icon, {
						...iconProps,
						testID: testID && `${testID}-icon`
					} )}
				</Box.Animated>
			</Pressable>
		</Box>

	);
};

export default Switch;
