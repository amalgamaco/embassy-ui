const testingProps = [ 'accessible', 'accessibilityRole', 'accessibilityState', 'accessibilityLabel' ];

module.exports = ( {
	renderComponent, testID, omitProps = [], ...accessibilityProps
} ) => {
	const props = testingProps.filter( prop => !omitProps.includes( prop ) );
	it.each( props )( 'has %s prop', ( prop ) => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( testID ) ).toHaveProp( prop, accessibilityProps[ prop ] );
	} );
};
