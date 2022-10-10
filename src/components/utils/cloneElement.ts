import React, { ReactElement } from 'react';

const cloneElement = <PropsType extends Partial<PropsType> & React.Attributes>(
	element: ReactElement<PropsType> | undefined,
	props: PropsType
) => (
		element && React.isValidElement( element )
			? React.cloneElement( element, { ...props, ...element.props } )
			: null
	);

export default cloneElement;
