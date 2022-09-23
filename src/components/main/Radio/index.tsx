import React, { forwardRef, memo } from 'react';
import UIKitIcon from '../../../icons/UIKitIcon';
import IconButton from '../IconButton';
import useRadioPropsResolver from './hooks';
import type { IRadioProps } from './types';

const Radio = ( {
	as = UIKitIcon,
	selectedIcon = 'circle-filled',
	unselectedIcon = 'circle',
	selected = false,
	...props
}: IRadioProps, ref?: any ) => {
	const { iconProps, restProps } = useRadioPropsResolver( {
		...props,
		selectedIcon,
		unselectedIcon,
		selected
	} );

	return (
		<IconButton
			ref={ref}
			accessible
			accessibilityLabel='radio button'
			accessibilityRole='radio'
			accessibilityState={{
				checked: selected,
				disabled: !!props.disabled
			}}
			as={as}
			__icon={iconProps}
			{...restProps}
		/>
	);
};

export default memo( forwardRef( Radio ) );
