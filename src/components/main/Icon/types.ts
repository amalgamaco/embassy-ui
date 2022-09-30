/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';
import type { ViewProps, ColorValue, View } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface AsComponentProps extends ViewProps {
	name: string,
	size?: number | undefined,
	color?: ColorValue | number | undefined,
	ref?: React.Ref<View>
}

export type AsComponent = React.ComponentType<AsComponentProps>;

export interface IIconProps extends ViewProps, ComponentStyledProps<'Icon'> {
	// The name of the icon. It should be a valid name for
	// the base icon component set as the `as` prop.
	name: string,

	// The base icon to be used to render the final icon. It should
	// support the following props:
	// - name (string): The name of the icon to render.
	// - size (number | undefined): The size of the icon.
	// - color (ColorValue | undefined): The color of the icon.
	as?: AsComponent
}
