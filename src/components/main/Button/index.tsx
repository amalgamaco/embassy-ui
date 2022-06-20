import React from 'react';
import { useTheme } from '../../../core/theme/hooks';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import type { IButtonProps } from './types';

const Button = ( {
	children, ...props
}: IButtonProps ) => {
	const theme = useTheme();
	const {
		__label: labelProps,
		__stack: stackProps,
		...containerProps
	} = theme?.resolvePropsFor( 'Button', props ) || {};

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
