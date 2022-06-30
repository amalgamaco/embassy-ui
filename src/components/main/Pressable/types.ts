import type { PressableProps } from 'react-native';
import type { StyledProps } from 'src/core/theme/types';

export interface IPressableProps extends PressableProps, StyledProps {
	children?: PressableProps[ 'children' ]
}
