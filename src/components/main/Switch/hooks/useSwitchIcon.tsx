import React from 'react';

import UIKitIcon from '../../../../icons/UIKitIcon';
import Icon from '../../Icon';

const defaultOnIcon = <Icon as={UIKitIcon} name="checkmark" />;
const defaultOffIcon = <Icon as={UIKitIcon} name="close-outlined" />;

interface IUseSwitchIconProps {
	on: boolean,
	onIcon?: JSX.Element,
	offIcon?: JSX.Element
}

const useSwitchIcon = ( {
	on,
	onIcon = defaultOnIcon,
	offIcon = defaultOffIcon
}: IUseSwitchIconProps ) => (
	on ? onIcon : offIcon
);

export default useSwitchIcon;
