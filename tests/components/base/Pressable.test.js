import React from 'react';
import { render } from '@testing-library/react-native';
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

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderComponent(
				<Text>Test!</Text>,
				props
			),
			testId: 'test-pressable'
		}
	);

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
