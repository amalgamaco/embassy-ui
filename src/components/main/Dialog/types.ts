import type { ModalProps } from 'react-native-modal';
import type { ViewProps } from 'react-native';
import type { ReactElement } from 'react';
import type {
	ComponentStyledProps, VariantType
} from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { ITextProps } from '../Text/types';
import type { IBoxProps } from '../Box/types';
import type { IIconProps } from '../Icon/types';

export interface IDialogProps extends ViewProps, ComponentStyledProps<'Dialog'>, Partial<ModalProps> {
	children?: JSX.Element | JSX.Element[] | string,
	onClosePress?: IPressableProps[ 'onPress' ],
	variant?: VariantType<'Banner'>,
	withIcon?: boolean,
	icon?: ReactElement<IIconProps>,
	closeIcon?: ReactElement<IIconProps>
}

export interface IDialogContainerProps {
	children?: JSX.Element | JSX.Element[] | string;
}

export interface IDialogHeaderProps extends ViewProps, ComponentStyledProps<'Dialog'> {
	title?: string;
	children?: JSX.Element | JSX.Element[] | string;
}

export interface IDialogBodyProps extends ViewProps, ComponentStyledProps<'Dialog'> {
	children?: JSX.Element | JSX.Element[] | string;
}

export interface IDialogFooterProps extends ViewProps, ComponentStyledProps<'Dialog'> {
	children?: JSX.Element | JSX.Element[] | string;
}

export interface IDialogContext {
	containerProps?: IBoxProps,
	bodyProps?: IBoxProps,
	titleProps?: ITextProps,
	headerProps?: IBoxProps,
	footerProps?: IBoxProps,
	iconProps?: Omit<IIconProps, 'name'>,
	closeIconProps?: Omit<IIconProps, 'name'>,
	closeButtonContainerProps?: IBoxProps,
	iconProp?: ReactElement<IIconProps>,
	closeIconProp?: ReactElement<IIconProps>,
	withIcon?: boolean,
	showCloseIcon?: boolean,
	dialogTestID?: string
}
