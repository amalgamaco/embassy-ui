import type { Animated, View, ViewProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface IBoxProps extends ViewProps, ComponentStyledProps<'Box'> {
	children?: JSX.Element | JSX.Element[] | string | null;
	ref?: React.Ref<View>;
}

export interface IAnimatedBoxProps extends Animated.AnimatedProps<ViewProps>, ComponentStyledProps<'Box'> {
}

export type IBoxAnimatedComponentType = (
	props: IAnimatedBoxProps
) => JSX.Element;

export type IBoxComponentType = ( (
	props: IBoxProps
) => JSX.Element ) & {
	Animated: IBoxAnimatedComponentType,
};
