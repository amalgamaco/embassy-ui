import React from 'react';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import { useButtonPropsResolver } from './hooks';
import type { IButtonProps } from './types';

const Button = ( {
	children, ...props
}: IButtonProps ) => {
	const {
		containerProps, stackProps, labelProps
	} = useButtonPropsResolver( props );

	return (
		<Pressable {...containerProps}>
			<HStack {...stackProps}>
				<Text {...labelProps}>
					{children}
				</Text>
			</HStack>
		</Pressable>
	);
};

export default Button;
