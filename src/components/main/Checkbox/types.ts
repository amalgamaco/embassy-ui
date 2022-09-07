import type { GestureResponderEvent, NativeSyntheticEvent, TargetedEvent } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface ICheckboxProps extends ComponentStyledProps<'Checkbox'>
{
	onPress?: ( ( event: GestureResponderEvent ) => void ),
	onPressIn?: ( ( event: GestureResponderEvent ) => void ),
	onPressOut?: ( ( event: GestureResponderEvent ) => void ),
    onHoverIn?: ( ( event: GestureResponderEvent ) => void ),
    onHoverOut?: ( ( event: GestureResponderEvent ) => void ),
    onFocus?: ( ( event: NativeSyntheticEvent<TargetedEvent> ) => void ),
    onBlur?: ( ( event: NativeSyntheticEvent<TargetedEvent> ) => void ),
    disabled?: boolean,
    isSelected?: boolean,
    isIndeterminated?: boolean,
    onChange?: ( ( event: GestureResponderEvent ) => void )
}
