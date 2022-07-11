import type { ViewProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface IBoxProps extends ViewProps, ComponentStyledProps<'Box'> {
	children?: JSX.Element | JSX.Element[] | string | undefined;
}
