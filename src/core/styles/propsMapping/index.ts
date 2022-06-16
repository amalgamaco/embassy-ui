import border from './border';
import color from './color';
import flexbox from './flexbox';
import layout from './layout';
import spacing from './spacing';
import typography from './typography';

export const STYLE_PROPS_MAPPING = {
	...border,
	...color,
	...flexbox,
	...layout,
	...spacing,
	...typography
} as const;

export type StlyePropsMapping = typeof STYLE_PROPS_MAPPING;
