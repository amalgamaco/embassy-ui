import type { GestureResponderEvent } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface ICheckboxProps extends ComponentStyledProps<'Checkbox'>
{
	onPress?: ( ( event: GestureResponderEvent ) => void ),
	onPressIn?: ( ( event: GestureResponderEvent ) => void ),
	onPressOut?: ( ( event: GestureResponderEvent ) => void ),
    disabled?: boolean,
    isSelected?: boolean,
    isIndeterminated?: boolean,
    onChange?: ( ( event: GestureResponderEvent ) => void )
}
