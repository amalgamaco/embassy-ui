import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Pressable from '../../../src/components/main/Pressable';
import Text from '../../../src/components/main/Text';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'Pressable', () => {
	const renderComponent = ( children, props ) => render(
		<Pressable testID="test-pressable" {...props} >{children}</Pressable>,
		{ wrapper: WithThemeProvider }
	);

	it( 'contains the passed children', () => {
		const { getByTestId } = renderComponent( <Text>Test!</Text> );
		expect( getByTestId( 'test-pressable' ) ).toHaveTextContent( 'Test!' );
	} );

	describe( 'handle pressable events', () => {
		const events = [
			[ 'onPress', 'press' ],
			[ 'onLongPress', 'longPress' ],
			[ 'onHover', 'hover' ]
			// FIXME: blur and focus events are not working
			// [ 'onFocus', 'focus' ],
			// [ 'onBlur', 'blur' ]
		];

		it.each( events )(
			'calls the %s handler for the %s event',
			( handler, event ) => {
				const handlerMock = jest.fn();
				const { getByTestId } = renderComponent( <Text>Test!</Text>, { [ handler ]: handlerMock } );
				fireEvent( getByTestId( 'test-pressable' ), event );

				expect( handlerMock ).toHaveBeenCalled();
			}
		);
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderComponent(
				<Text>Test!</Text>,
				props
			),
			testId: 'test-pressable'
		}
	);
} );
