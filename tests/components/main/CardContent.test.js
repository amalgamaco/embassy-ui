import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { itBehavesLike } from '../../support/sharedExamples';
import WithThemeProvider from '../../support/withThemeProvider';
import { CardContent } from '../../../src';

describe( 'CardContent', () => {
	const renderCardContent = props => render( <CardContent testID='test-card-content' {...props} />, { wrapper: WithThemeProvider } );

	it( 'renders the CardContent', () => {
		const { getByTestId } = renderCardContent();
		expect( getByTestId( 'test-card-content' ) ).not.toBeNull();
	} );

	it( 'renders its children', () => {
		const testChildren = <Text testID='test-children'>this is a test component</Text>;
		const { getByTestId } = renderCardContent( { children: testChildren } );
		expect( getByTestId( 'test-children' ) ).not.toBeNull();
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderCardContent( props ),
			testId: 'test-card-content',
			omitProps: [ 'borderRadius' ]
		}
	);
} );
