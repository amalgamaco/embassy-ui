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

	const position = useSwitchAnimation( {
		isOn,
		containerProps,
		iconContainerProps: iconContainerProps || {},
		animationDuration,
		animatedValue: initialValue ? 1 : 0
	} );

	const onSwitchPressed = useCallback( () => {
		onChange?.( !isOn );
		setIsOn( !isOn );
	}, [ isOn, setIsOn, onChange ] );

	const style = { transform: [ { translateX: position } ] };

	return (
		<Box {...switchContainerProps}>
			<Pressable {...containerProps} onPress={onSwitchPressed} testID={testID}>
				<Box.Animated {...iconContainerProps} style={style}>
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
