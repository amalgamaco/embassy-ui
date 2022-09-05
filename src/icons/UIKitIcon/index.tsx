import React from 'react';
import { CircleOutilned, CircleFilled } from './icons';
import type { AsComponent, IIconProps } from '../../components/main/Icon/types';
import IconNotFoundError from './IconNotFoundError';

interface IconsMap {
	[key: string]: AsComponent;
}

const PACKAGE_ICONS = Object.freeze( {
	'circle': CircleOutilned,
	'circle-filled': CircleFilled
} ) as IconsMap;

const UIKitIcon = ( {
	name, size, color, style, ...restProps
}: IIconProps ) => {
	const Illustration = PACKAGE_ICONS[ name ];

	if ( !Illustration ) {
		throw new IconNotFoundError( name );
	}

	return (
		<Illustration
			color={color}
			width={size}
			height={size}
			style={style}
			{...restProps}
		/>
	);
};

export default UIKitIcon;
