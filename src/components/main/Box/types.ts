import type { ViewProps } from 'react-native';
import type { StyledProps } from 'src/core/theme/types';

export interface IBoxProps extends ViewProps, StyledProps {
	children?: JSX.Element | JSX.Element[] | string | undefined;
}
