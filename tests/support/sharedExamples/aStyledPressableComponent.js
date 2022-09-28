const { fireEvent } = require( '@testing-library/react-native' );

module.exports = ( { renderComponent, testId } ) => {
	describe( 'is a styled pressable component', () => {
		const events = [
			[ '__pressed', 'pressed', 'pressIn' ],
			[ '__hovered', 'hovered', 'hoverIn' ]
			// Focus is not working
			// [ '__focused', 'focused', 'focus' ]
		];

		it.each( events )(
			'applies the %s style when %s',
			( stateStyleKey, _, event ) => {
				const { getByTestId } = renderComponent( { [ stateStyleKey ]: { bg: 'secondary.50' } } );
				fireEvent( getByTestId( testId ), event );

				expect( getByTestId( testId ) ).toHaveStyle( { backgroundColor: '#EDF2FF' } );
			}
		);
	} );
};
