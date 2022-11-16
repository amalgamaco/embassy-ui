import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { itBehavesLike } from '../../support/sharedExamples';
import WithThemeProvider from '../../support/withThemeProvider';
import { CardActions } from '../../../src';

describe( 'CardActions', () => {
	const renderCardActions = props => render( <CardActions testID='test-card-actions' {...props} />, { wrapper: WithThemeProvider } );

	it( 'renders the CardActions', () => {
		const { getByTestId } = renderCardActions();
		expect( getByTestId( 'test-card-actions' ) ).not.toBeNull();
	} );

	it( 'renders its children', () => {
		const testChildren = <Text testID='test-children'>this is a test component</Text>;
		const { getByTestId } = renderCardActions( { children: testChildren } );
		expect( getByTestId( 'test-children' ) ).not.toBeNull();
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderCardActions( props ),
			testId: 'test-card-actions',
			omitProps: [ 'borderRadius' ]
		}
	);
} );
