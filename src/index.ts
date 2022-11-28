import UIKitIcon from './icons/UIKitIcon';

export { default as Theme } from './core/theme/Theme';
export { default as defaultTheme } from './core/theme/defaultTheme';
export { default as extendThemeConfig } from './core/theme/extendThemeConfig';
export { ThemeProvider, ThemeConsumer } from './core/theme/context';
export { useTheme, useThemeColorModeSwtich } from './core/theme/hooks';
export {
	Avatar,
	Banner,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	Chip,
	DateInput,
	Dialog,
	FormControl,
	HStack,
	Icon,
	IconButton,
	Image,
	PasswordInput,
	Radio,
	Switch,
	Text,
	TextInput,
	VStack
} from './components';
export { UIKitIcon };

export type {
	IBoxProps,
	IAnimatedBoxProps,
	IButtonProps,
	IPressableProps,
	IHStackProps,
	IVStackProps,
	ITextProps,
	IIconProps,
	IIconButtonProps,
	ICheckboxProps,
	ICheckboxGroupProps,
	IRadioProps,
	IRadioGroupProps,
	ITextInputProps,
	IFormControlProps,
	IChipProps,
	ISwitchProps,
	IBannerProps
} from './components/types';

export type { IThemeConfig, ICustomThemeConfig } from './core/theme/types';
