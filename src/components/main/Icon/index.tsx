import React, { memo, forwardRef } from 'react';
import IndeterminatedIcon from '../../../Assets/Icons/IndeterminatedIcon';
import UncheckedIcon from '../../../Assets/Icons/UncheckedIcon';
import CheckedIcon from '../../../Assets/Icons/CheckedIcon';
import { useIconPropsResolver } from './hooks';
import type { AsComponent, IIconProps } from './types';

interface CUSTOM_ICONS_TYPE {
	[key: string]: AsComponent;
}

const CUSTOM_ICONS = Object.freeze( {
	customcheckedbox: CheckedIcon,
	customuncheckedbox: UncheckedIcon,
	customindeterminatedbox: IndeterminatedIcon
} ) as CUSTOM_ICONS_TYPE;

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

	if ( name.includes( 'custom' ) ) {
		const Illustration = CUSTOM_ICONS[ name.toLowerCase() ];
		return (
			<Illustration
				color={color}
				height={size}
				width={size}
				{...restProps}
			/>
		);
	}

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
