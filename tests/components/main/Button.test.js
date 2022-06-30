import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Button from '../../../src/components/main/Button';
import { Icon } from '../../../src';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const FakeBaseIcon = ( { name, testID, ...props } ) => (
	<Text testID={testID} {...props}>{name}</Text>
);

const TestIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

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

	it( 'shows the left button when it\'s set', () => {
		const { getByTestId } = renderComponent(
			<Text>Test!</Text>,
			{ leftIcon: <TestIcon /> }
		);

		expect( getByTestId( 'test-icon' ) ).toHaveTextContent( 'test' );
	} );

	it( 'shows the right button when it\'s set', () => {
		const { getByTestId } = renderComponent(
			<Text>Test!</Text>,
			{ rightIcon: <TestIcon /> }
		);

		expect( getByTestId( 'test-icon' ) ).toHaveTextContent( 'test' );
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
