import type { FontFamilyVariant } from '../typography/types';
import type { PropsMappingDict } from './types';

export const COLOR_PROPS_MAPPING: PropsMappingDict = Object.freeze( {
	color: {
		property: 'color',
		transformerMethod: 'color'
	},
	tintColor: {
		property: 'tintColor',
		transformerMethod: 'color'
	},
	backgroundColor: {
		property: 'backgroundColor',
		transformerMethod: 'color'
	},
	bg: {
		property: 'backgroundColor',
		transformerMethod: 'color'
	},
	bgColor: {
		property: 'backgroundColor',
		transformerMethod: 'color'
	},
	background: {
		property: 'backgroundColor',
		transformerMethod: 'color'
	}
} );

export const TYPOGRAPHY_PROPS_MAPPING: PropsMappingDict = {
	font: {
		property: 'fontFamily',
		transformerMethod: ( value, transformer, allProps ) => (
			transformer.font(
				value.toString(),
				{
					weight: allProps.fontWeight?.toString(),
					variant: allProps.fontStyle?.toString() as FontFamilyVariant
				}
			)
		)
	},
	fontSize: {
		property: 'fontSize',
		transformerMethod: 'fontSize'
	},
	fontWeight: {
		property: 'fontWeight',
		transformerMethod: 'fontWeight'
	},
	lineHeight: {
		property: 'lineHeight',
		transformerMethod: 'lineHeight'
	},
	letterSpacing: {
		property: 'letterSpacing',
		transformerMethod: 'letterSpacing'
	},
	textAlign: {
		property: 'textAlign'
	},
	fontStyle: {
		property: 'fontStyle'
	},
	textTransform: {
		property: 'textTransform'
	},
	textDecoration: {
		property: 'textDecorationLine'
	},
	txtDecor: {
		property: 'textDecorationLine'
	},
	textDecorationLine: {
		property: 'textDecorationLine'
	}
};

export const STYLE_PROPS_MAPPING = Object.freeze( {
	...COLOR_PROPS_MAPPING,
	...TYPOGRAPHY_PROPS_MAPPING
} );
