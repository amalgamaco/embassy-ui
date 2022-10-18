import React from 'react';
import UIKitIcon from '../../../../icons/UIKitIcon';
import Icon from '../../Icon';
import type { IIconProps } from '../../Icon/types';
import type { IBannerProps } from '../types';
import { cloneElement } from '../../../utils/elements';

const icon: { [key: string]: string; } = Object.freeze( {
	error: 'alert-triangle',
	warning: 'alert-circle',
	information: 'question-circle',
	success: 'checkmark'
} );

interface IUseBannerIconProps {
	props: IBannerProps,
	iconProps?: Omit<IIconProps, 'name'>
}

const useBannerIcon = ( {
	props,
	iconProps
}: IUseBannerIconProps ) => {
	if ( props.icon ) return cloneElement( props.icon, iconProps || {} );

	return ( props.variant && icon[ props.variant ] )
	&& <Icon as={UIKitIcon}
		name={icon[ props.variant ]}
		{...iconProps}
	/>;
};

export default useBannerIcon;
