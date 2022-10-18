import type { ViewProps } from 'react-native';
import type { ReactElement } from 'react';
import type { ComponentStyledProps, VariantType } from '../../../core/components/types';
import type { IIconProps } from '../Icon/types';
import type { IPressableProps } from '../Pressable/types';

export interface IBannerProps extends ViewProps, ComponentStyledProps<'Banner'> {
	children?: JSX.Element | JSX.Element[] | string;
	variant?: VariantType<'Banner'>;
	visible?: boolean;
	withIcon?: boolean;
	icon?: ReactElement<IIconProps>;
	deleteIcon?: ReactElement<IIconProps>;
	onDeletePress?: IPressableProps[ 'onPress' ]
}
