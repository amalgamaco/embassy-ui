import type { ReactElement } from 'react';
import type { ComponentStyledProps } from 'src/core/components/types';
import type { IIconProps } from '../Icon/types';
import type { IPressableProps } from '../Pressable/types';

export interface IChipProps extends Omit<IPressableProps, 'children' | 'variant' | 'size'>,
	ComponentStyledProps<'Chip'>
{
	label: string,
	selected?: boolean,
	icon?: ReactElement<IIconProps>,
}
