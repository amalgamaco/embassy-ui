import React, { ReactElement } from 'react';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import { useButtonPropsResolver } from './hooks';
import type { IButtonIconProps, IButtonProps } from './types';

const cloneIconWithProps = (
	element: ReactElement<IButtonIconProps> | undefined,
	props: IButtonIconProps
) => (
	element && React.isValidElement( element )
		? React.cloneElement( element, { ...props, ...element.props } )
		: null
);

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

	const leftIcon = cloneIconWithProps( leftIconProp, leftIconProps || {} );
	const rightIcon = cloneIconWithProps( rightIconProp, rightIconProps || {} );

	return (
		<Pressable {...containerProps}>
			<HStack {...stackProps}>
				{leftIcon}
				<Text {...labelProps}>
					{children}
				</Text>
				{rightIcon}
			</HStack>
		</Pressable>
	);
};

export default Button;
