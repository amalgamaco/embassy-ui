import type { IDialogProps } from '../types';
import { useComponentPropsResolver } from '../../../../hooks';

const useDialogPropsResolver = (
	{
		onClosePress,
		testID,
		...props
	}: IDialogProps
) => {
	const {
		__title: titleProps,
		__header: headerProps,
		__body: bodyProps,
		__footer: footerProps,
		__closeIcon: closeIconThemeProps,
		__icon: iconThemeProps,
		__closeButtonContainer: closeButtonContainerProps,
		...containerProps
	} = useComponentPropsResolver( 'Dialog', props ) as IDialogProps;

	const iconProps = {
		testID: testID && `${testID}-icon`,
		...iconThemeProps
	};

	const closeIconProps = {
		...closeIconThemeProps,
		onPress: onClosePress,
		testID: testID && `${testID}-close-icon`
	};

	const showCloseIcon = !!onClosePress;

	return {
		testID,
		showCloseIcon,
		containerProps,
		bodyProps,
		titleProps,
		headerProps,
		footerProps,
		closeIconProps,
		iconProps,
		closeButtonContainerProps
	};
};

export default useDialogPropsResolver;
