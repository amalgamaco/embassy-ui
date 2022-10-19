/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import type { ComponentName } from '../core/components/types';
import { useTheme } from '../core/theme/hooks';
import getStylePropsAndRestProps from './getStylePropsAndRestProps';

const useStyleFromPropsResolver = (
	componentName: ComponentName,
	props: any
) => {
	const theme = useTheme();

	return useMemo( () => {
		const { style: styleProp, ...otherProps } = props;
		const { styleProps, restProps } = getStylePropsAndRestProps( otherProps );
		const defaultProps = theme?.defaultPropsFor( componentName ) || {};
		const variantProps = theme?.variantPropsFor( componentName, restProps.variant ) || {};
		const styleFromProps = theme?.styleForProps( {
			...defaultProps,
			...variantProps,
			...styleProps
		} );
		const style = { ...styleFromProps, ...styleProp };

		return [ style, restProps ];
	}, [ componentName, props, theme ] );
};

export default useStyleFromPropsResolver;
