import type { IIconProps } from '../../Icon/types';
import { ComponentType, createComponent } from '../../../utils/elements';
import IconButton from '../../IconButton';
import type { IIconButtonProps } from '../../IconButton/types';
import type { IBannerProps } from '../types';

interface IUseDeleteIconProps {
	props: IBannerProps,
	deleteIconProps?: Omit<IIconProps, 'name'>
}

const useDeleteIcon = ( {
	props,
	deleteIconProps
}: IUseDeleteIconProps ) => (
	props.onDeletePress && createComponent(
			IconButton as ComponentType<IIconButtonProps>,
			{
				from: props.deleteIcon,
				props: {
					...deleteIconProps
				}
			}
	)
);

export default useDeleteIcon;
