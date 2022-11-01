import React from 'react';
import type { IDialogFooterProps } from './types';
import { DialogContext } from './Context';
import Box from '../Box/Box';

const DialogFooter = ( { children, testID, ...props }: IDialogFooterProps ) => {
	const { dialogTestID, footerProps } = React.useContext( DialogContext );
	const dialogFooterTestID = testID || ( dialogTestID ? `${dialogTestID}-footer` : undefined );

	return (
		<Box {...footerProps} {...props} testID={dialogFooterTestID}>
			{children}
		</Box>
	);
};

export default DialogFooter;
