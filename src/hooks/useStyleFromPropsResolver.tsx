import type { ComponentName } from 'src/core/components/types';
import { STYLE_PROPS_MAPPING } from '../core/styles/consts';
import { useTheme } from '../core/theme/hooks';

const getStylePropsAndRestProps = ( props: any ) => Object
	.keys( props )
	.reduce(
		(
			{ styleProps, restProps }: { styleProps: any, restProps: any },
			key: string
		) => {
			if ( key in STYLE_PROPS_MAPPING ) {
				styleProps[ key ] = props[ key ];
			} else {
				restProps[ key ] = props[ key ];
			}

			return { styleProps, restProps };
		},
		{
			styleProps: {},
			restProps: {}
		}
	);

const useStyleFromPropsResolver = (
	componentName: ComponentName,
	{
		style: styleProp,
		...props
	}: any
) => {
	const theme = useTheme();

	// TODO: Use useMemo to optimize style re-calculation.
	const { styleProps, restProps } = getStylePropsAndRestProps( props );
	const defaultProps = theme?.defaultPropsFor( componentName ) || {};
	const variantProps = theme?.variantPropsFor( componentName, restProps.variant ) || {};
	const styleFromPRops = theme?.styleForProps( {
		...defaultProps,
		...variantProps,
		...styleProps
	} );
	const style = { ...styleFromPRops, ...styleProp };

	return [ style, restProps ];
};

export default useStyleFromPropsResolver;
