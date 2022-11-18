import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { itBehavesLike } from '../../support/sharedExamples';
import WithThemeProvider from '../../support/withThemeProvider';
import { CardMedia } from '../../../src';

describe( 'CardMedia', () => {
	const renderCardMedia = props => render( <CardMedia testID='test-card-media' {...props} />, { wrapper: WithThemeProvider } );

	it( 'renders the CardMedia', () => {
		const { getByTestId } = renderCardMedia();
		expect( getByTestId( 'test-card-media' ) ).not.toBeNull();
	} );

	it( 'renders its children', () => {
		const testChildren = <Text testID='test-children'>this is a test component</Text>;
		const { getByTestId } = renderCardMedia( { children: testChildren } );
		expect( getByTestId( 'test-children' ) ).not.toBeNull();
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderCardMedia( props ),
			testId: 'test-card-media',
			omitProps: [ 'borderRadius' ]
		}
	);
} );
