import type { ComponentBaseStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { IIconProps } from '../Icon/types';

export interface IIconButtonProps extends Omit<IPressableProps, 'children' | 'size'>,
	Omit<IIconProps, 'hitSlop' | 'style'>
{
	__icon?: ComponentBaseStyledProps<'Box'>
}
