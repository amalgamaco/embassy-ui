import React from 'react';
import type { IDialogBodyProps } from './types';
import { DialogContext } from './Context';
import Box from '../Box/Box';

const DialogBody = ( { children, testID, ...props }: IDialogBodyProps ) => {
	const { dialogTestID, bodyProps } = React.useContext( DialogContext );
	const dialogBodyTestID = testID || ( dialogTestID ? `${dialogTestID}-body` : undefined );

	return (
		<Box {...bodyProps} {...props} testID={dialogBodyTestID}>
			{children}
		</Box> );
};

export default DialogBody;
