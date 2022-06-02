import border from './border';
import color from './color';
import spacing from './spacing';
import typography from './typography';

export const STYLE_PROPS_MAPPING = {
	...border,
	...color,
	...spacing,
	...typography
} as const;

export type StlyePropsMapping = typeof STYLE_PROPS_MAPPING;
