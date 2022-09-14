const { fireEvent } = require( '@testing-library/react-native' );

module.exports = ( { renderComponent, testId } ) => {
	describe( 'handle pressable events', () => {
		const events = [
			[ 'onPress', 'press' ],
			[ 'onPressIn', 'pressIn' ],
			[ 'onPressOut', 'pressOut' ],
			[ 'onLongPress', 'longPress' ],
			[ 'onHoverIn', 'hoverIn' ],
			[ 'onHoverOut', 'hoverOut' ]
			// FIXME: blur and focus events are not working
			// [ 'onFocus', 'focus' ],
			// [ 'onBlur', 'blur' ]
		];

		it.each( events )(
			'calls the %s handler for the %s event',
			( handler, event ) => {
				const handlerMock = jest.fn();
				const { getByTestId } = renderComponent( { [ handler ]: handlerMock } );
				fireEvent( getByTestId( testId ), event );

				expect( handlerMock ).toHaveBeenCalled();
			}
		);
	} );
};
