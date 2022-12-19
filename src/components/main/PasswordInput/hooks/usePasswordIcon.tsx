import React from 'react';
import UIKitIcon from '../../../../icons/UIKitIcon';
import Icon from '../../Icon';

const defaultShowPasswordIcon = <Icon as={UIKitIcon} name="eye" />;
const defaultHidePasswordIcon = <Icon as={UIKitIcon} name="eye-off-outlined" />;

interface IUsePasswordIconProps {
    isPasswordHidden: boolean,
    showPasswordIcon?: JSX.Element,
    hidePasswordIcon?: JSX.Element
}

const usePasswordIcon = ( {
	showPasswordIcon = defaultShowPasswordIcon,
	hidePasswordIcon = defaultHidePasswordIcon,
	isPasswordHidden
}: IUsePasswordIconProps ) => ( isPasswordHidden ? showPasswordIcon : hidePasswordIcon );

export default usePasswordIcon;
