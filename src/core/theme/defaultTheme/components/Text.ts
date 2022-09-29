const HEADLINE_VARIANT = Object.freeze( {
	font: 'Epilogue',
	fontWeight: 'bold',
	letterSpacing: 'md'
} );

const BODY_VARIANT = Object.freeze( {
	font: 'Inter',
	fontSize: 'sm',
	fontWeight: 'regular',
	lineHeight: 'lg',
	letterSpacing: 'sm'
} );

const SMALL_VARIANT = Object.freeze( {
	font: 'Inter',
	fontSize: 'xs',
	fontWeight: 'regular',
	letterSpacing: 'sm',
	lineHeight: 'xs'
} );

const X_SMALL_VARIANT = Object.freeze( {
	font: 'Inter',
	fontSize: '2xs',
	fontWeight: 'regular',
	letterSpacing: 'sm',
	lineHeight: '2xs'
} );

export default {
	defaultProps: {
		font: 'Inter',
		fontSize: 'md',
		fontWeight: 'regular'
	},
	variants: {
		'h1': {
			...HEADLINE_VARIANT,
			fontSize: '3xl',
			lineHeight: '3xl'
		},
		'h2': {
			...HEADLINE_VARIANT,
			fontSize: 'xl',
			lineHeight: '2xl'
		},
		'h3': {
			...HEADLINE_VARIANT,
			fontSize: 'lg',
			lineHeight: 'xl'
		},
		'sh': {
			...HEADLINE_VARIANT,
			fontSize: 'sm',
			lineHeight: 'md'
		},
		'body': BODY_VARIANT,
		'body-special': {
			...BODY_VARIANT,
			fontWeight: 'bold'
		},
		'body-italic': {
			...BODY_VARIANT,
			fontStyle: 'italic'
		},
		'links': {
			font: 'Inter',
			fontSize: 'sm',
			fontWeight: 'regular',
			lineHeight: 'lg',
			letterSpacing: 'sm',
			textDecoration: 'underline'
		},
		'small': SMALL_VARIANT,
		'small-bold': {
			...SMALL_VARIANT,
			fontWeight: 'bold'
		},
		'small-link': {
			...SMALL_VARIANT,
			textDecoration: 'underline'
		},
		'x-small': X_SMALL_VARIANT,
		'x-small-bold': {
			...X_SMALL_VARIANT,
			fontWeight: 'bold'
		},
		'x-small-link': {
			...X_SMALL_VARIANT,
			textDecoration: 'underline'
		}
	}
};
