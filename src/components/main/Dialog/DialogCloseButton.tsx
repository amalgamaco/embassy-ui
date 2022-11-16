import React from 'react';
import { DialogContext } from './Context';
import IconButton from '../IconButton';
import Box from '../Box/Box';
import UIKitIcon from '../../../icons/UIKitIcon';
import { ComponentType, createComponent } from '../../utils/elements';
import type { IIconButtonProps } from '../IconButton/types';

const defaultCloseButtonIcon = <IconButton as={UIKitIcon} name="close-outlined" />;

const DialogCloseButton = () => {
	const {
		closeIconProps, closeButtonContainerProps, closeIconProp
	} = React.useContext( DialogContext );

	const closeIcon = createComponent(
			IconButton as ComponentType<IIconButtonProps>,
			{
				from: closeIconProp || defaultCloseButtonIcon,
				props: {
					...closeIconProps
				}
			}
	);

	return (
		<Box style={{ position: 'absolute', right: 20, top: 20 }} {...closeButtonContainerProps}>
			{closeIcon}
		</Box>
	);
};

export default DialogCloseButton;
