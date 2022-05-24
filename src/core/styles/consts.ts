import type { FontFamilyVariant } from '../typography/types';
import type { ComponentProps, PropValue, Transformer } from './types';

export const COLOR_PROPS_MAPPING = {
	color: {
		property: 'color',
		scale: 'palette',
		transformerMethod: 'color'
	},
	tintColor: {
		property: 'tintColor',
		scale: 'palette',
		transformerMethod: 'color'
	},
	backgroundColor: {
		property: 'backgroundColor',
		scale: 'palette',
		transformerMethod: 'color'
	},
	bg: {
		property: 'backgroundColor',
		scale: 'palette',
		transformerMethod: 'color'
	},
	bgColor: {
		property: 'backgroundColor',
		scale: 'palette',
		transformerMethod: 'color'
	},
	background: {
		property: 'backgroundColor',
		scale: 'palette',
		transformerMethod: 'color'
	}
} as const;

export const TYPOGRAPHY_PROPS_MAPPING = {
	font: {
		property: 'fontFamily',
		scale: 'typography.fonts',
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

export const STYLE_PROPS_MAPPING = {
	...COLOR_PROPS_MAPPING,
	...TYPOGRAPHY_PROPS_MAPPING
} as const;

export type StlyePropsMapping = typeof STYLE_PROPS_MAPPING;
