import type { Mask } from 'react-native-mask-input';

const MASK_REGEX_FOR_FORMAT_UNIT: { [ unit: string ]: RegExp } = Object.freeze( {
	'M': /\d/,
	'd': /\d/,
	'y': /\d/
} );

export const maskForFormat = ( format: string ): Mask => (
	Array.from( format ).map(
		unit => MASK_REGEX_FOR_FORMAT_UNIT[ unit ] || unit
	)
);
