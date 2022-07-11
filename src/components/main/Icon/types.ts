import type React from 'react';
import type { ColorValue } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

interface AsComponentProps {
	name: string,
	size?: number | undefined,
	color?: ColorValue | number | undefined
}

export type AsComponent = React.ComponentClass<AsComponentProps>
	| React.FunctionComponent<AsComponentProps>;

export interface IIconProps extends ComponentStyledProps<'Icon'> {
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
