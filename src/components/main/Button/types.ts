import type { ComponentStyledProps, VariantType } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { IHStackProps } from '../Stack/types';
import type { ITextProps } from '../Text/types';

export interface IButtonProps extends Omit<IPressableProps, 'size'>,
	ComponentStyledProps<'Button'>
{
	label?: string,

	__label?: ITextProps,
	__stack?: IHStackProps,

	variant?: VariantType<'Button'>,

	children?: ITextProps[ 'children' ]
}
