import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Chip from '../../../src/components/main/Chip';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'Chip', () => {
	const renderChip = props => render(
		<Chip testID="test-chip" {...props} />,
		{ wrapper: WithThemeProvider }
	);

	it( 'shows the passed label', () => {
		const label = 'Label';
		const { getByTestId } = renderChip( { label } );
		expect( getByTestId( 'test-chip' ) ).toHaveTextContent( label );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderChip(
				{ label: 'Label', ...props }
			),
			testId: 'test-chip'
		}
	);

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderChip(
				{ label: 'Label', ...props }
			),
			testId: 'test-chip'
		}
	);
} );
