import React, { memo, forwardRef } from 'react';
import { useIconPropsResolver } from './hooks';
import type { IIconProps } from './types';

const Icon = ( {
	name, ...props
}: IIconProps, ref: any ) => {
	const {
		BaseIconComponent,
		color,
		size,
		style,
		restProps
	} = useIconPropsResolver( props );

	return (
		<BaseIconComponent
			name={name}
			ref={ref}
			color={color}
			size={size}
			style={style}
			{...restProps}
		/>
	);
};

export default memo( forwardRef( Icon ) );
