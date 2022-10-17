module.exports = ( {
	renderComponent, testID, accessibilityRole, accessibilityState
} ) => {
	describe( 'is an accessible component', () => {
		it( 'has accessible prop', () => {
			const { getByTestId } = renderComponent();
			expect( getByTestId( testID ) ).toHaveProp( 'accessible', true );
		} );
		it( 'has accessibilityRole prop', () => {
			const { getByTestId } = renderComponent();
			expect( getByTestId( testID ) ).toHaveProp( 'accessibilityRole', accessibilityRole );
		} );
		it( 'has accessibilityState prop', () => {
			const { getByTestId } = renderComponent();
			expect( getByTestId( testID ) ).toHaveProp( 'accessibilityState', accessibilityState );
		} );
	} );
};
