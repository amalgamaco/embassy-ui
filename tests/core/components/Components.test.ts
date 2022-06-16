import Components from '../../../src/core/components/Components';
import type { ComponentsConfig } from '../../../src/core/components/types';

const config: ComponentsConfig = {
	Text: {
		defaultProps: {
			fontSize: 'xl',
			lineHeight: 'md',
			fontWeight: 'normal'
		},
		variants: {
			'h1': {
				fontSize: '4xl',
				lineHeight: '2xl',
				fontWeight: 'bold'
			},
			'body': {
				fontSize: '2xl',
				lineHeight: 'md',
				fontWeight: 'normal'
			}
		}
	}
};

describe( 'Components', () => {
	describe( 'defaultPropsFor', () => {
		it( 'returns the default props for the component', () => {
			const components = new Components( config );
			expect( components.defaultPropsFor( 'Text' ) ).toEqual( config.Text?.defaultProps );
		} );

		it( 'returns undefined if there is not config for the given component', () => {
			const components = new Components( {} );
			expect( components.defaultPropsFor( 'Text' ) ).toBeUndefined();
		} );

		it( 'returns undefined if there is not defaultProps for the given component', () => {
			const components = new Components( { Text: {} } );
			expect( components.defaultPropsFor( 'Text' ) ).toBeUndefined();
		} );
	} );

	describe( 'variantPropsFor', () => {
		it( 'returns the props for the given varian for the given component', () => {
			const components = new Components( config );
			expect( components.variantPropsFor( 'Text', 'h1' ) ).toEqual( config.Text?.variants?.h1 );
		} );

		it( 'returns undefined if there is not config for the given component', () => {
			const components = new Components( {} );
			expect( components.variantPropsFor( 'Text', 'h1' ) ).toBeUndefined();
		} );

		it( 'returns undefined if there are not variants for the given component', () => {
			const components = new Components( { Text: {} } );
			expect( components.variantPropsFor( 'Text', 'h1' ) ).toBeUndefined();
		} );

		it( 'returns undefined if the variant doesn\'t exists for the given component', () => {
			const components = new Components( config );
			expect( components.variantPropsFor( 'Text', 'h3' ) ).toBeUndefined();
		} );
	} );
} );
