/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useTheme } from '../core/theme/hooks';
import getStylePropsAndRestProps from './getStylePropsAndRestProps';

const useTranslatePropsToStyle = ( {
	style: styleProp,
	...props
}: any ) => {
	const theme = useTheme();
	const { styleProps, restProps } = getStylePropsAndRestProps( props );
	const styleFromProps = theme?.styleForProps( styleProps );
	const style = { ...styleProp, ...styleFromProps };

	return [ style, restProps ];
};

export default useTranslatePropsToStyle;
