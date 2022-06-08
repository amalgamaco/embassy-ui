import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Box from '../../../src/components/main/Box';
import Text from '../../../src/components/main/Text';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'Box', () => {
	const renderBox = ( children, props ) => render(
		<Box testID="test-box" {...props} >{children}</Box>,
		{ wrapper: WithThemeProvider }
	);

	it( 'contains the passed children', () => {
		const { getByTestId } = renderBox( <Text>Test!</Text> );
		expect( getByTestId( 'test-box' ) ).toHaveTextContent( 'Test!' );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderBox(
				<Text>Test!</Text>,
				props
			),
			testId: 'test-box'
		}
	);
} );
