import React, { memo, forwardRef } from 'react';
import Pressable from '../Pressable';
import Icon from '../Icon';
import { useIconButtonPropsResolver } from './hooks';
import type { IIconButtonProps } from './types';

const IconButton = ( { name, ...props }: IIconButtonProps, ref?:any ) => {
	const {
		iconProps, containerProps
	} = useIconButtonPropsResolver( props );

	return (
		<Pressable
			ref={ref}
			accessible
			accessibilityRole='button'
			accessibilityState={{ disabled: props.disabled || false }}
			{...containerProps}
		>
			<Icon name={name} {...iconProps} />
		</Pressable>
	);
};

export default memo( forwardRef( IconButton ) );
