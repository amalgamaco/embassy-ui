import React from 'react';
import Pressable from '../Pressable';
import Icon from '../Icon';
import { useIconButtonPropsResolver } from './hooks';
import type { IIconButtonProps } from './types';

const IconButton = ( { name, ...props }: IIconButtonProps ) => {
	const {
		iconProps, containerProps
	} = useIconButtonPropsResolver( props );

	return (
		<Pressable
			accessible
			accessibilityRole='button'
			accessibilityState={{ disabled: props.disabled || false }}
			{...containerProps}
		>
			<Icon name={name} {...iconProps} />
		</Pressable>
	);
};

export default IconButton;
