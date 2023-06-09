// Components pseudoprops types
// ----------------------------
// Here we define the pseudoprops types for each component in the theme.
// The components pseudoprops are props that are use to set styled props
// to the components' internal components, e.g. to set the label (Text) component's
// props through the __label pseudoprop for the Button component.
// {
//   bg: 'black',
//   mx: '2',
//   radius: 'xs',
//   __label: {
//     color: 'white',
//     fontSize: 'xl'
//   }
// }
import type { ComponentBaseStyledProps } from './styledProps';
import type { ComponentName } from './common';

// Avatar
interface IAvatarPseudoProps {
	__image: ComponentBaseStyledProps<'Image'>;
}

// Button pseudoprops
interface IButtonPseudoProps {
	__label: ComponentBaseStyledProps<'Text'>,
	__stack: ComponentBaseStyledProps<'Stack'>
	__leftIcon: ComponentBaseStyledProps<'Icon'>
	__rightIcon: ComponentBaseStyledProps<'Icon'>
}

// IconButton pseudoprops
interface IIconButtonPseudoProps {
	__icon: ComponentBaseStyledProps<'Box'>
}

interface ICheckboxPseudoProps {
	__icon: ComponentBaseStyledProps<'Icon'>,
	__iconContainer: ComponentBaseStyledProps<'Box'>,
	__label: ComponentBaseStyledProps<'Text'>
}

interface IRadioPseudoProps {
	__icon: ComponentBaseStyledProps<'Icon'>,
	__iconContainer: ComponentBaseStyledProps<'Box'>,
	__label: ComponentBaseStyledProps<'Text'>
}

interface IFormControlPseudoProps {
	__label: ComponentBaseStyledProps<'Text'>,
	__required: ComponentBaseStyledProps<'Text'>,
	__hintText: ComponentBaseStyledProps<'Text'>,
	__infoIcon: ComponentBaseStyledProps<'Icon'>,
	__errorText: ComponentBaseStyledProps<'Text'>,
	__errorIcon: ComponentBaseStyledProps<'Icon'>
}

// TextInput pseudoprops
interface ITextInputPseudoProps {
	__icon: ComponentBaseStyledProps<'Icon'>
	__textInput: ComponentBaseStyledProps<'Box'>
}

// Switch pseudoprops
interface ISwitchPseudoProps {
	__icon: ComponentBaseStyledProps<'Icon'>,
	__iconContainer: ComponentBaseStyledProps<'Box'>,
	__switchContainer: ComponentBaseStyledProps<'Box'>,
}

interface ICardHeaderPseudoProps {
	__avatar: ComponentBaseStyledProps<'Box'>;
	__infoContainer: ComponentBaseStyledProps<'Box'>;
	__rightActionsContainer: ComponentBaseStyledProps<'Box'>;
	__title: ComponentBaseStyledProps<'Text'>;
	__subtitle: ComponentBaseStyledProps<'Text'>;
}

// CHIP pseudoprops
interface IChipPseudoProps {
	__stack: ComponentBaseStyledProps<'Stack'>,
	__label: ComponentBaseStyledProps<'Text'>,
	__icon: ComponentBaseStyledProps<'Icon'>,
	__deleteIcon: ComponentBaseStyledProps<'Icon'>
}

// Banner pseudoprops
interface IBannerPseudoProps {
	__label: ComponentBaseStyledProps<'Text'>
	__labelContainer: ComponentBaseStyledProps<'Box'>
	__icon: ComponentBaseStyledProps<'Icon'>
	__deleteIcon: ComponentBaseStyledProps<'Icon'>
}

// Dialog pseudoprops
interface IDialogPseudoProps {
	__header: ComponentBaseStyledProps<'Box'>,
	__body: ComponentBaseStyledProps<'Box'>,
	__footer: ComponentBaseStyledProps<'Box'>,
	__title: ComponentBaseStyledProps<'Text'>,
	__closeIcon: ComponentBaseStyledProps<'Icon'>,
	__icon: ComponentBaseStyledProps<'Icon'>,
	__closeButtonContainer: ComponentBaseStyledProps<'Box'>
}

// Pseudoprops config for all components
interface ComponentsPseudoPropsConfig {
	Avatar: IAvatarPseudoProps,
	Banner: IBannerPseudoProps
	Button: IButtonPseudoProps,
	CardHeader: ICardHeaderPseudoProps,
	Checkbox: ICheckboxPseudoProps,
	Chip: IChipPseudoProps,
	Dialog: IDialogPseudoProps,
	IconButton: IIconButtonPseudoProps,
	FormControl: IFormControlPseudoProps,
	Radio: IRadioPseudoProps
	Switch: ISwitchPseudoProps,
	TextInput: ITextInputPseudoProps,
}

// Template type to get pseudoprops for a given component
/* eslint-disable @typescript-eslint/ban-types */
export type ComponentPseudoProps<C extends ComponentName> =
	C extends keyof ComponentsPseudoPropsConfig
	? ComponentsPseudoPropsConfig[C]
	: {};
/* eslint-enable @typescript-eslint/ban-types */
