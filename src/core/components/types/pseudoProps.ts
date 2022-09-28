// Components pseudoprops types
// ----------------------------
// Here we define the pseudoprops types for each component in the theme.
// The components pseudoprops are props that are use to set styled props
// to the components' internal components, e.g. to set the label (Text) component's
// props through the __label pseudoprop for the Button component.
// {
// 	bg: 'black',
// 	mx: '2',
// 	radius: 'xs',
// 	__label: {
// 		color: 'white',
// 		fontSize: 'xl'
// 	}
// }
import type { ComponentBaseStyledProps } from './styledProps';
import type { ComponentName } from './common';

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
	__errorText: ComponentBaseStyledProps<'Text'>,
	__errorIcon: ComponentBaseStyledProps<'Icon'>
}

// TextInput pseudoprops
interface ITextInputPseudoProps {
	__icon: ComponentBaseStyledProps<'Icon'>
	__textInput: ComponentBaseStyledProps<'Box'>
}

// Pseudoprops config for all components
interface ComponentsPseudoPropsConfig {
	Button: IButtonPseudoProps,
	Checkbox: ICheckboxPseudoProps,
	IconButton: IIconButtonPseudoProps,
	Radio: IRadioPseudoProps
	FormControl: IFormControlPseudoProps,
	TextInput: ITextInputPseudoProps
}

// Template type to get pseudoprops for a given component
/* eslint-disable @typescript-eslint/ban-types */
export type ComponentPseudoProps<C extends ComponentName> =
	C extends keyof ComponentsPseudoPropsConfig
		? ComponentsPseudoPropsConfig[C]
		: {};
/* eslint-enable @typescript-eslint/ban-types */
