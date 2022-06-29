import { useMemo } from 'react';
import { useTheme } from '../../../core/theme/hooks';
import useStyleFromPropsResolver from '../../../hooks/useStyleFromPropsResolver';
import type { AsComponent, IIconProps } from './types';

export const useIconPropsResolver = ( props: Omit<IIconProps, 'name'> ) => {
	const theme = useTheme();

	const {
		as: asProp,
		size: sizeProp,
		color: colorProp,
		...resolvedProps
	} = useMemo<Omit<IIconProps, 'name'>>( () => (
		theme?.resolvePropsFor( 'Icon', props ) || {}
	), [ theme, props ] );

	const size = sizeProp ? theme?.sizeFor( 'Icon', sizeProp ) : undefined;
	const color = colorProp ? theme?.color( colorProp ) : undefined;

	const [ style, restProps ] = useStyleFromPropsResolver(
		'Icon', resolvedProps
	);

	const BaseIconComponent = asProp as AsComponent;

	if ( !BaseIconComponent ) {
		throw new Error(
			'The `as` prop is required for the Icon component. You must supply it in the '
			+ 'component props or in the Theme config as the component\'s default props.'
		);
	}

	return {
		BaseIconComponent, size, color, style, restProps
	};
};
