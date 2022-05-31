import Layout from '../../../src/core/layout/Layout';

const layoutConfig = {
	borderWidths: {
		'0': 0,
		'1': '1px',
		'2': '2px',
		'4': '4px',
		'8': '8px'
	},
	spacings: {
		'0': 0,
		'0.5': 2,
		'1': 4,
		'1.5': 6,
		'2': 8,
		'2.5': 10,
		'3': 12,
		'3.5': 14,
		'4': 16,
		'5': 20,
		'6': 24,
		'7': 28,
		'8': 32,
		'9': 36,
		'10': 40
	},
	sizes: {
		'3xs': 224,
		'2xs': 256,
		'xs': 320,
		'sm': 384,
		'md': 448,
		'lg': 512,
		'xl': 576,
		'2xl': 672
	},
	radius: {
		'none': 0,
		'xs': 2,
		'sm': 4,
		'md': 6,
		'lg': 8,
		'xl': 12,
		'2xl': 16,
		'3xl': 24,
		'full': 9999
	}
};

describe( 'Layout', () => {
	const layout = new Layout( layoutConfig );

	describe( 'config', () => {
		expect( layout.config ).toEqual( layoutConfig );
	} );

	describe( 'borderWidth', () => {
		it( 'returns the correct border width for the alias', () => {
			expect( layout.borderWidth( '4' ) ).toEqual( '4px' );
		} );

		it( 'returns undefined if the alias doesn\'t exists', () => {
			expect( layout.borderWidth( 'invalid' ) ).toBeUndefined();
		} );
	} );

	describe( 'spacing', () => {
		it( 'returns the correct spacing for the alias', () => {
			expect( layout.spacing( '10' ) ).toEqual( 40 );
		} );

		it( 'returns undefined if the alias doesn\'t exists', () => {
			expect( layout.spacing( 'invalid' ) ).toBeUndefined();
		} );
	} );

	describe( 'size', () => {
		it( 'returns the correct size for the alias', () => {
			expect( layout.size( 'sm' ) ).toEqual( 384 );
		} );

		it( 'returns undefined if the alias doesn\'t exists', () => {
			expect( layout.size( 'invalid' ) ).toBeUndefined();
		} );
	} );

	describe( 'radius', () => {
		it( 'returns the correct radius for the alias', () => {
			expect( layout.radius( 'lg' ) ).toEqual( 8 );
		} );

		it( 'returns undefined if the alias doesn\'t exists', () => {
			expect( layout.radius( 'invalid' ) ).toBeUndefined();
		} );
	} );
} );
