import { useTheme } from '../../../core/theme/hooks';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { AsComponent, IIconProps } from './types';

export const useIconPropsResolver = ( props: Omit<IIconProps, 'name'> ) => {
	const theme = useTheme();

	const {
		as: asProp,
		size: sizeProp,
		color: colorProp,
		...resolvedProps
	} = useComponentPropsResolver( 'Icon', props ) as Omit<IIconProps, 'name'>;

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

	if ( size ) {
		style.fontSize = style.fontSize || size;
		style.width = style.width || size;
		style.height = style.height || size;
		style.lineHeight = style.lineHeight || size;
	}

	return {
		BaseIconComponent, size, color, style, restProps
	};
};
