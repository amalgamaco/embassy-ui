import React, { forwardRef, memo } from 'react';
import UIKitIcon from '../../../icons/UIKitIcon';
import IconButton from '../IconButton';
import useRadioButtonPropsResolver from './hooks';
import type { IRadioButtonProps } from './types';

const RadioButton = ( {
	as = UIKitIcon,
	selectedIcon = 'circle-filled',
	unselectedIcon = 'circle',
	selected = false,
	...props
}: IRadioButtonProps, ref?: any ) => {
	const { iconProps, restProps } = useRadioButtonPropsResolver( {
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

export default memo( forwardRef( RadioButton ) );
