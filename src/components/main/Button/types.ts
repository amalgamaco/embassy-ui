import type { ComponentStateProps, StyledProps, VariantType } from '../../../core/theme/types';
import type { IPressableProps } from '../Pressable/types';
import type { IHStackProps } from '../Stack/types';
import type { ITextProps } from '../Text/types';

export interface IButtonProps extends IPressableProps, StyledProps, ComponentStateProps<'Button'> {
	label?: string,

	__label?: ITextProps,
	__stack?: IHStackProps,

	variant?: VariantType<'Button'>,

	children?: ITextProps[ 'children' ]
}
