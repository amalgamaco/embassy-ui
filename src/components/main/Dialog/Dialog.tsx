import React from 'react';
import Modal from 'react-native-modal';
import type { IDialogProps } from './types';
import DialogCloseButton from './DialogCloseButton';
import DialogHeader from './DialogHeader';
import DialogContainer from './DialogContainer';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import useDialogPropsResolver from './hooks/useDialogPropsResolver';
import { DialogContext } from './Context';
import ConditionalRender from '../../utils/ConditionalRender';

const Dialog = ( {
	isVisible = false,
	onClosePress,
	backdropOpacity = 0.3,
	icon: iconProp,
	closeIcon: closeIconProp,
	withIcon = true,
	testID,
	children,
	...props
}: IDialogProps ) => {
	const resolvedProps = useDialogPropsResolver( { ...props, onClosePress, testID } );

	return (
		<Modal
			testID={testID}
			style={{ alignItems: 'center' }}
			backdropOpacity={backdropOpacity}
			isVisible={isVisible}
			{...props}
		>
			<DialogContext.Provider value={{
				...resolvedProps, iconProp, closeIconProp, withIcon, dialogTestID: testID
			}}>
				<DialogContainer>
					<ConditionalRender render={resolvedProps.showCloseIcon}>
						<DialogCloseButton />
					</ConditionalRender>
					<>{children}</>
				</DialogContainer>
			</DialogContext.Provider>
		</Modal>
	);
};

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;
