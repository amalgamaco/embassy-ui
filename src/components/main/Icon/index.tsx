import React, { memo, forwardRef, useMemo } from 'react';
import { useTheme } from '../../../core/theme/hooks';
import useStyleFromPropsResolver from '../../../hooks/useStyleFromPropsResolver';
import type { IIconProps } from './types';

const Icon = ( {
	name, as: AsComponent, ...props
}: IIconProps, ref: any ) => {
	const theme = useTheme();

	const {
		size,
		color,
		...resolvedProps
	} = useMemo<Omit<IIconProps, 'name' | 'as'>>( () => (
		theme?.resolvePropsFor( 'Icon', props ) || {}
	), [ theme, props ] );

	const rawSize = size ? theme?.sizeFor( 'Icon', size ) : undefined;
	const rawColor = color ? theme?.color( color ) : undefined;

	const [ style, restProps ] = useStyleFromPropsResolver( 'Icon', resolvedProps );

	return (
		<AsComponent
			name={name}
			ref={ref}
			color={rawColor}
			size={rawSize}
			style={style}
			{...restProps}
		/>
	);
};

export default memo( forwardRef( Icon ) );
