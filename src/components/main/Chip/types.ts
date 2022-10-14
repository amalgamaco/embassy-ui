import type { ReactElement } from 'react';
import type { ComponentStyledProps, IHoverableComponent } from '../../../core/components/types';
import type { IIconProps } from '../Icon/types';
import type { IPressableProps } from '../Pressable/types';

export interface IChipProps extends Omit<IPressableProps, 'children' | 'variant' | 'size'>,
	ComponentStyledProps<'Chip'>,
	IHoverableComponent
{
	label: string,

	selected?: boolean,

	icon?: ReactElement<IIconProps>,
	deleteIcon?: ReactElement<IIconProps>,
	onDeletePress?: IPressableProps[ 'onPress' ]
}
