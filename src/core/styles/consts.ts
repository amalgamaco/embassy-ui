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

export const STYLE_PROPS_MAPPING = Object.freeze( {
	...COLOR_PROPS_MAPPING
} );
