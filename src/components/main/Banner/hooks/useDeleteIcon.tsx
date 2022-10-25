import type { ReactElement } from 'react';
import type { IIconProps } from '../../Icon/types';
import { ComponentType, createComponent } from '../../../utils/elements';
import IconButton from '../../IconButton';
import type { IIconButtonProps } from '../../IconButton/types';
import type { IPressableProps } from '../../Pressable/types';

interface IUseDeleteIconProps {
	deleteIconProp?: ReactElement<IIconProps>,
	deleteIconProps?: Omit<IIconProps, 'name'>,
	onDeletePress?: IPressableProps[ 'onPress' ]
}

const useDeleteIcon = ( {
	deleteIconProp,
	deleteIconProps,
	onDeletePress
}: IUseDeleteIconProps ) => (
	onDeletePress ? createComponent(
			IconButton as ComponentType<IIconButtonProps>,
			{
				from: deleteIconProp,
				props: {
					...deleteIconProps
				}
			}
	) : null
);

export default useDeleteIcon;
