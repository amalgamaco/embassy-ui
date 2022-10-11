import React, { ReactElement } from 'react';

export type ComponentPropTypes<PropsType> = Partial<PropsType> & React.Attributes;
export type ComponentType<PropsType extends Partial<PropsType> & React.Attributes> = (
	props: PropsType
) => JSX.Element;

export const cloneElement = <PropsType extends ComponentPropTypes<PropsType>>(
	element: ReactElement<PropsType> | undefined,
	props: PropsType
) => (
		element && React.isValidElement( element )
			? React.cloneElement( element, { ...props, ...element.props } )
			: null
	);

export const createComponent = <
	PropsType extends ComponentPropTypes<PropsType>,
	FromPropsType extends PropsType
>(
		componentType: ComponentType<PropsType>,
		{ from, props = {} as FromPropsType }: {
			from?: ReactElement<FromPropsType>,
			props?: Partial<PropsType>
		}
	) => (
		React.createElement(
			componentType,
			{ ...props, ...( from?.props || {} ) } as PropsType
		)
	);
