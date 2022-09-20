import type { ComponentBaseStyledProps, IHoverableComponent }
	from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { IIconProps } from '../Icon/types';

export interface IIconButtonProps extends Omit<IPressableProps, 'children' | 'size'>,
	Omit<IIconProps, 'hitSlop' | 'style' | 'variant'>,
	IHoverableComponent
{
	__icon?: ComponentBaseStyledProps<'Box'>
}
