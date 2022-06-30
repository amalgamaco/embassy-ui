import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Button from '../../../src/components/main/Button';
import Text from '../../../src/components/main/Text';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'Button', () => {
	const renderComponent = ( children, props ) => render(
		<Button testID="test-button" {...props} >{children}</Button>,
		{ wrapper: WithThemeProvider }
	);

	it( 'contains the passed children', () => {
		const { getByTestId } = renderComponent( <Text>Test!</Text> );
		expect( getByTestId( 'test-button' ) ).toHaveTextContent( 'Test!' );
	} );

	it( 'applies the __pressed styles when press in', () => {
		const { getByTestId } = renderComponent( <Text>Test!</Text> );
		fireEvent( getByTestId( 'test-button' ), 'pressIn' );
		expect( getByTestId( 'test-button' ) ).toHaveStyle( { opacity: 0.7 } );
	} );

	it( 'applies the __disabled styles when it is disabled', () => {
		const { getByTestId } = renderComponent( <Text>Test!</Text>, { disabled: true } );
		expect( getByTestId( 'test-button' ) ).toHaveStyle( { opacity: 0.7 } );
	} );

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderComponent(
				<Text>Test!</Text>,
				props
			),
			testId: 'test-button'
		}
	);

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderComponent(
				<Text>Test!</Text>,
				props
			),
			testId: 'test-button',
			// FIXME: Handle several props translating to the same property
			// with different values
			omitProps: [ 'borderRadius', 'backgroundColor' ]
		}
	);
} );
