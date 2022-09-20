import React from 'react';

import UIKitIcon from '../../../../icons/UIKitIcon';
import Icon from '../../Icon';

const defaultCheckedIcon = <Icon as={UIKitIcon} name="box-checked" />;
const defaultUncheckedIcon = <Icon as={UIKitIcon} name="box-unchecked" />;
const defaultIndeterminatedIcon = <Icon as={UIKitIcon} name="box-indeterminated" />;

interface IUseCheckboxIconProps {
	selected: boolean,
	indeterminated: boolean,
	checkedIcon?: JSX.Element,
	uncheckedIcon?: JSX.Element,
	indeterminatedIcon?: JSX.Element
}

const useCheckboxIcon = ( {
	selected,
	indeterminated,
	checkedIcon = defaultCheckedIcon,
	uncheckedIcon = defaultUncheckedIcon,
	indeterminatedIcon = defaultIndeterminatedIcon
}: IUseCheckboxIconProps ) => {
	if ( indeterminated ) return indeterminatedIcon;
	if ( selected ) return checkedIcon;
	return uncheckedIcon;
};

export default useCheckboxIcon;
