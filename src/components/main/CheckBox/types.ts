import type { ComponentStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';

export interface ICheckBoxProps extends Omit<IPressableProps, 'children' | 'size'>,
ComponentStyledProps<'CheckBox'>
{
    isSelected?: boolean,
    isIndeterminated?:boolean,
}
