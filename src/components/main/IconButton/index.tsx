import React, { memo, forwardRef } from 'react';
import type { View } from 'react-native';
import Pressable from '../Pressable';
import Icon from '../Icon';
import { useIconButtonPropsResolver } from './hooks';
import type { IIconButtonProps } from './types';

const IconButton = ( {
	name, ...props
}: IIconButtonProps, ref?: React.Ref<View> ) => {
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
