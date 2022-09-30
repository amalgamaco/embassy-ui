/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentName } from '../core/components/types';
import { useTheme } from '../core/theme/hooks';
import getStylePropsAndRestProps from './getStylePropsAndRestProps';

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
