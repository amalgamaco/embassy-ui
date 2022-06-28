import type React from 'react';
import type { ColorValue } from 'react-native';
import type { ComponentStyledProps } from '../../../core/theme/types';

interface AsComponentProps {
	name: string,
	size?: number | undefined,
	color?: ColorValue | number | undefined
}

type AsComponent = React.ComponentClass<AsComponentProps>
	| React.FunctionComponent<AsComponentProps>;

export interface IIconProps extends ComponentStyledProps<'Icon'> {
	name: string,
	as: AsComponent
}
