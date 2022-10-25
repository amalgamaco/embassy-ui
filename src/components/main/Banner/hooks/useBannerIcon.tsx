import React, { ReactElement } from 'react';
import UIKitIcon from '../../../../icons/UIKitIcon';
import Icon from '../../Icon';
import type { IIconProps } from '../../Icon/types';
import { cloneElement } from '../../../utils/elements';
import type { VariantType } from '../../../../core/components/types';

const icon: { [key: string]: string; } = Object.freeze( {
	error: 'alert-triangle',
	warning: 'alert-circle',
	information: 'question-circle',
	success: 'checkmark'
} );

interface IUseBannerIconProps {
	iconProp?: ReactElement<IIconProps>,
	iconProps?: Omit<IIconProps, 'name'>,
	variant?: VariantType<'Banner'>
}

const useBannerIcon = ( {
	iconProp,
	iconProps,
	variant
}: IUseBannerIconProps ) => {
	if ( iconProp ) return cloneElement( iconProp, iconProps || {} );

	return ( variant && ( icon[ variant ] || iconProps?.as ) ) ? <Icon as={UIKitIcon}
		name={icon[ variant ]}
		{...iconProps}
	/> : null;
};

export default useBannerIcon;
