import React from 'react';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import { useButtonPropsResolver } from './hooks';
import type { IButtonProps } from './types';
import cloneElement from '../../utils/cloneElement';

const Button = ( {
	children,
	leftIcon: leftIconProp,
	rightIcon: rightIconProp,
	...props
}: IButtonProps ) => {
	const {
		containerProps,
		stackProps,
		labelProps,
		leftIconProps,
		rightIconProps
	} = useButtonPropsResolver( props );

	const leftIcon = cloneElement( leftIconProp, leftIconProps || {} );
	const rightIcon = cloneElement( rightIconProp, rightIconProps || {} );

	return (
		<Pressable
			accessible
			accessibilityRole='button'
			accessibilityState={{ disabled: props.disabled || false }}
			{...containerProps}
		>
			<HStack {...stackProps}>
				<>{leftIcon}</>
				<Text {...labelProps}>
					{children}
				</Text>
				<>{rightIcon}</>
			</HStack>
		</Pressable>
	);
};

export default Button;
