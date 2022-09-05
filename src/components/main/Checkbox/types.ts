import type { GestureResponderEvent } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';

export interface ICheckboxProps extends Omit<IPressableProps, 'children' | 'size'>,
ComponentStyledProps<'Checkbox'>
{
    isSelected?: boolean,
    isIndeterminated?: boolean,
    onChange?: ( ( event: GestureResponderEvent ) => void )
}
