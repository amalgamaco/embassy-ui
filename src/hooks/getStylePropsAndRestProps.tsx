import { STYLE_PROPS_MAPPING } from '../core/styles/propsMapping';

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

export default getStylePropsAndRestProps;
