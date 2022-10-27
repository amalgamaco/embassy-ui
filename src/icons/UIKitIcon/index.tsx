import React, { ElementType } from 'react';
import {
	CircleFilled,
	BoxChecked,
	BoxUnchecked,
	BoxIndeterminated,
	AlertCircle,
	Eye,
	EyeOffOutlined,
	AlertTriangleOutlined,
	QuestionCircleOutlined,
	CheckmarkOutlined,
	CloseOutlined,
	CircleOutlined
} from './icons';
import type { AsComponentProps } from '../../components/main/Icon/types';
import IconNotFoundError from './IconNotFoundError';

interface IconsMap {
	[key: string]: ElementType;
}

const PACKAGE_ICONS = Object.freeze( {
	'alert-circle': AlertCircle,
	'alert-triangle': AlertTriangleOutlined,
	'box-checked': BoxChecked,
	'box-indeterminated': BoxIndeterminated,
	'box-unchecked': BoxUnchecked,
	'checkmark': CheckmarkOutlined,
	'circle': CircleOutlined,
	'circle-filled': CircleFilled,
	'close-outlined': CloseOutlined,
	'eye': Eye,
	'question-circle': QuestionCircleOutlined,
	'eye-off-outlined': EyeOffOutlined
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
