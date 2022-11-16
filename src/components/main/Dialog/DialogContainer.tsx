import React from 'react';
import type { IDialogContainerProps } from './types';
import Box from '../Box/Box';
import { DialogContext } from './Context';

const DialogContainer = ( { children }: IDialogContainerProps ) => {
	const { containerProps } = React.useContext( DialogContext );

	return (
		<Box {...containerProps} testID={'dialog-container'}>
			{children}
		</Box> );
};

export default DialogContainer;
