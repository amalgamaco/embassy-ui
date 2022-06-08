module.exports = ( {
	renderComponent,
	direction,
	testId,
	expectedChildrenTexts,
	childTestIdPattern
} ) => {
	describe( 'is a stack', () => {
		it( 'contains the passed children', () => {
			const { getAllByTestId } = renderComponent();
			const children = getAllByTestId( childTestIdPattern );

			expect( children.length ).toEqual( expectedChildrenTexts.length );
			children.forEach( ( child, index ) => {
				expect( child ).toHaveTextContent( expectedChildrenTexts[ index ] );
			} );
		} );

		it( `shows the children in ${direction} direction`, () => {
			const { getByTestId } = renderComponent();
			expect( getByTestId( testId ) ).toHaveStyle( { flexDirection: direction } );
		} );

		describe( 'reversed', () => {
			it( 'reverses the children order', () => {
				const { getByTestId } = renderComponent( { reversed: true } );
				expect( getByTestId( testId ) ).toHaveStyle( { flexDirection: `${direction}-reverse` } );
			} );
		} );

		describe( 'space', () => {
			it( 'adds the space between children', () => {
				const { getAllByTestId } = renderComponent( { space: '3' } );
				const children = getAllByTestId( childTestIdPattern );
				const spacers = getAllByTestId( /spacer-.*/ );

				expect( children.length ).toEqual( expectedChildrenTexts.length );
				expect( spacers.length ).toEqual( expectedChildrenTexts.length - 1 );

				const spaceProp = direction === 'row' ? 'width' : 'height';

				spacers.forEach( ( spacer ) => {
					expect( spacer ).toHaveStyle( { [ spaceProp ]: 12 } );
				} );
			} );
		} );
	} );
};
