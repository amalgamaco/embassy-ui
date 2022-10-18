import type { IBannerProps } from '../types';
import { useComponentPropsResolver } from '../../../../hooks';
import UIKitIcon from '../../../../icons/UIKitIcon';

const useBannerPropsResolver = (
	{
		onDeletePress,
		testID,
		icon: iconProp,
		deleteIcon: deleteIconProp,
		...props
	}: IBannerProps
) => {
	const {
		__label: labelProps,
		__labelContainer: textContainerProps,
		__icon: iconThemeProps,
		__deleteIcon: deleteIconThemeProps,
		...containerProps
	} = useComponentPropsResolver( 'Banner', props ) as IBannerProps;

	const iconProps = {
		testID: testID && `${testID}-icon`,
		...iconThemeProps
	};

	const deleteIconProps = {
		...deleteIconThemeProps,
		name: 'close-outlined',
		as: UIKitIcon,
		onPress: onDeletePress,
		testID: testID && `${testID}-delete-icon`
	};

	return {
		containerProps,
		labelProps,
		textContainerProps,
		iconProps,
		deleteIconProps
	};
};

export default useBannerPropsResolver;
