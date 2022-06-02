import type { FontFamilyVariant } from '../../typography/types';
import type { ComponentProps, PropValue, Transformer } from '../types';

export default {
	font: {
		property: 'fontFamily',
		category: 'typography',
		scale: 'fonts',
		transformerMethod: (
			value: PropValue,
			transformer: Transformer,
			allProps: ComponentProps
		) => (
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
		category: 'typography',
		scale: 'fontSizes',
		transformerMethod: 'fontSize'
	},
	fontWeight: {
		property: 'fontWeight',
		category: 'typography',
		scale: 'fontWeights',
		transformerMethod: 'fontWeight'
	},
	lineHeight: {
		property: 'lineHeight',
		category: 'typography',
		scale: 'lineHeights',
		transformerMethod: 'lineHeight'
	},
	letterSpacing: {
		property: 'letterSpacing',
		category: 'typography',
		scale: 'letterSpacings',
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
} as const;
