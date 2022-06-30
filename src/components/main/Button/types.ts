import type { ReactElement } from 'react';
import type { ComponentStyledProps, VariantType } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { IIconProps } from '../Icon/types';
import type { ITextProps } from '../Text/types';

export type IButtonIconProps = Omit<IIconProps, 'name'>;

export interface IButtonProps extends Omit<IPressableProps, 'children' | 'size'>,
	ComponentStyledProps<'Button'>
{
	children: ITextProps['children'],

	leftIcon?: ReactElement<IButtonIconProps>,
	rightIcon?: ReactElement<IButtonIconProps>,

	variant?: VariantType<'Button'>
}
