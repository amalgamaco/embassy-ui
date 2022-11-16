import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';
import { CardHeader, Text } from '../../../src';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TEST_SRC = 'https://placekitten.com/g/200/300';
describe( 'CardHeader', () => {
	const renderHeader = ( { ...props } = {} ) => render(
		<CardHeader testID="test-header" {...props} />,
		{ wrapper: WithThemeProvider }
	);

	it( "renders the avatar if it's provided", () => {
		const { getByTestId } = renderHeader( { avatar: { uri: TEST_SRC } } );
		expect( getByTestId( 'test-header-avatar' ) ).not.toBeNull();
	} );

	it( "doesn't render the avatar if it's not provided", () => {
		const { queryByTestId } = renderHeader();
		expect( queryByTestId( 'test-header-avatar' ) ).toBeNull();
	} );

	it( 'renders the provided title', () => {
		const { getByText } = renderHeader( { title: 'Test Title' } );
		expect( getByText( 'Test Title' ) ).not.toBeNull();
	} );

	it( 'renders the provided subtitle', () => {
		const { getByText } = renderHeader( { subtitle: 'Test Subtitle' } );
		expect( getByText( 'Test Subtitle' ) ).not.toBeNull();
	} );

	it( 'renders the provided action', () => {
		const { getByTestId } = renderHeader( { rightActions: <Text testID="test-action" /> } );
		expect( getByTestId( 'test-action' ) ).not.toBeNull();
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderHeader( props ),
			testId: 'test-header'
		}
	);
} );
