import type { PressableProps } from 'react-native';
import type { ComponentBaseStyledProps, IHoverableComponent } from '../../../core/components/types';

export interface IPressableProps extends PressableProps,
	ComponentBaseStyledProps<'Pressable'>,
	IHoverableComponent
{
	children?: PressableProps[ 'children' ]
}
