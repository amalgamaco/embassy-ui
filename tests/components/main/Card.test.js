import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { itBehavesLike } from '../../support/sharedExamples';
import WithThemeProvider from '../../support/withThemeProvider';
import { Card } from '../../../src';

describe( 'Card', () => {
	const renderCard = props => render( <Card testID='test-card' {...props} />, { wrapper: WithThemeProvider } );

	it( 'renders the card', () => {
		const { getByTestId } = renderCard();
		expect( getByTestId( 'test-card' ) ).not.toBeNull();
	} );

	it( 'renders its children', () => {
		const testChildren = <Text testID='test-children'>this is a test component</Text>;
		const { getByTestId } = renderCard( { children: testChildren } );
		expect( getByTestId( 'test-children' ) ).not.toBeNull();
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderCard( props ),
			testId: 'test-card',
			omitProps: [ 'borderRadius' ]
		}
	);
} );
