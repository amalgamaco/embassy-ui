import React from 'react';
import { EmptyRadioButton } from '../../../assets/icons';
import type { AsComponent, IIconProps } from '../Icon/types';

interface CUSTOM_ICONS_TYPE {
	[key: string]: AsComponent;
}
// name: ReactComponent
const CUSTOM_ICONS = Object.freeze( {
	circle: EmptyRadioButton
} ) as CUSTOM_ICONS_TYPE;

function nameNotFound( name: string ): never {
	throw new Error( `Icon ${name} not found in UIKitIcon` );
}

const UIKitIcon = ( {
	name, size, color, style, ...restProps
}: IIconProps ) => {
	if ( !Object.keys( CUSTOM_ICONS ).includes( name ) ) {
		nameNotFound( name );
	}
	const Illustration = CUSTOM_ICONS[ name ];
	return (
		<Illustration
			color={color}
			width={size}
			height={size}
			style={style}
			{...restProps}
		></Illustration> );
};

export default UIKitIcon;
