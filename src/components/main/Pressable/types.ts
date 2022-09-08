import type { PressableProps } from 'react-native';
import type { ComponentBaseStyledProps } from '../../../core/components/types';

export interface IPressableProps extends PressableProps, ComponentBaseStyledProps<'Pressable'> {
	children?: PressableProps[ 'children' ]
}
