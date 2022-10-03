import React, { ElementType } from 'react';
import {
	CircleOutilned, CircleFilled, BoxChecked, BoxUnchecked,
	BoxIndeterminated, AlertCircle, Eye
} from './icons';
import type { AsComponentProps } from '../../components/main/Icon/types';
import IconNotFoundError from './IconNotFoundError';

interface IconsMap {
	[key: string]: ElementType;
}

const PACKAGE_ICONS = Object.freeze( {
	'alert-circle': AlertCircle,
	'circle': CircleOutilned,
	'circle-filled': CircleFilled,
	'box-checked': BoxChecked,
	'box-unchecked': BoxUnchecked,
	'box-indeterminated': BoxIndeterminated,
	'eye': Eye
} ) as IconsMap;

const UIKitIcon = ( {
	name, size, color, style, ...restProps
}: AsComponentProps ) => {
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
