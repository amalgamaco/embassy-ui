import { STYLE_PROPS_MAPPING } from './consts';
import type {
	ComponentProps, PropMap, PropName, PropsMappingDict,
	PropValue, Style, StylePropValue, Transformer, TransformerMethod
} from './types';

type ConstructorProps = {
	props: ComponentProps
	transformer: Transformer
	mapping?: PropsMappingDict
}

export default class StyleProps {
	public props: ComponentProps;
	public transformer: Transformer;
	public mapping: PropsMappingDict;

	constructor( { props, transformer, mapping = STYLE_PROPS_MAPPING }: ConstructorProps ) {
		this.props = props;
		this.transformer = transformer;
		this.mapping = mapping;
	}

	get style(): Style {
		const style: Style = Object.keys( this.mapping ).reduce(
			( res: Style, propName ) => {
				const propValue = this.valueForProp( propName );
				if ( propValue === undefined ) { return res; }

				const {
					property: name,
					transformerMethod
				} = this.mappingFor( propName );

				const value = this.transformProperty( propValue, transformerMethod );
				if ( value === undefined ) { return res; }

				res[ name ] = value;
				return res;
			},
			{}
		);

		return style;
	}

	private valueForProp( propName: PropName ): PropValue | undefined {
		return this.props[ propName ];
	}

	private mappingFor( propName: PropName ): PropMap {
		return this.mapping[ propName ];
	}

	private transformProperty(
		value: PropValue, transformerMethod: TransformerMethod
	): StylePropValue | undefined {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return this.transformer[ transformerMethod ]( value );
	}
}
