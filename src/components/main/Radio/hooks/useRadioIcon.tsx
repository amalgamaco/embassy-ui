import React from 'react';

import UIKitIcon from '../../../../icons/UIKitIcon';
import Icon from '../../Icon';

const defaultSelectedIcon = <Icon as={UIKitIcon} name="circle-filled" />;
const defaultUnselectedIcon = <Icon as={UIKitIcon} name="circle" />;

interface IUseRadioIconProps {
	selected: boolean,
	selectedIcon?: JSX.Element,
	unselectedIcon?: JSX.Element
}

const useRadioIcon = ( {
	selected,
	selectedIcon = defaultSelectedIcon,
	unselectedIcon = defaultUnselectedIcon
}: IUseRadioIconProps ) => (
	selected ? selectedIcon : unselectedIcon
);

export default useRadioIcon;
