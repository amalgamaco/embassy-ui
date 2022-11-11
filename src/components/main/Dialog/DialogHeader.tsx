import React from 'react';
import type { IDialogHeaderProps } from './types';
import Box from '../Box/Box';
import { DialogContext } from './Context';
import Text from '../Text';
import UIKitIcon from '../../../icons/UIKitIcon';
import { cloneElement } from '../../utils/elements';
import ConditionalRender from '../../utils/ConditionalRender';
import Icon from '../Icon';

const defaultHeaderIcon = <Icon as={UIKitIcon} name="alert-circle" />;

const DialogHeader = ( {
	title, testID, children, ...props
}: IDialogHeaderProps ) => {
	const {
		dialogTestID, headerProps, titleProps, iconProps, iconProp, withIcon
	} = React.useContext( DialogContext );
	const dialogHeaderTestID = testID || ( dialogTestID ? `${dialogTestID}-header` : undefined );

	const icon = cloneElement( iconProp || defaultHeaderIcon, iconProps );

	return (
		<Box {...headerProps} {...props} testID={dialogHeaderTestID}>
			<ConditionalRender render={!!withIcon}>{icon}</ConditionalRender>
			<Text {...titleProps}>{title}</Text>
			<Box>{children}</Box>
		</Box> );
};

export default DialogHeader;
