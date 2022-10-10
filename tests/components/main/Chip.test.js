import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';
import FakeBaseIcon from '../../support/FakeBaseIcon';

import Icon from '../../../src/components/main/Icon';
import Chip from '../../../src/components/main/Chip';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TestIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

describe( 'Chip', () => {
	const label = 'Label';

	const renderChip = props => render(
		<Chip testID="test-chip" {...props} />,
		{ wrapper: WithThemeProvider }
	);

	it( 'shows the passed label', () => {
		const { getByTestId } = renderChip( { label } );
		expect( getByTestId( 'test-chip' ) ).toHaveTextContent( label );
	} );

	it( 'applies the correct styles when selected', () => {
		const { getByTestId } = renderChip( { label, selected: true } );
		expect( getByTestId( 'test-chip' ) ).toHaveStyle( { borderColor: '#01164D' } );
	} );

	it( 'shows an icon when it\'s set', () => {
		const { queryByTestId } = renderChip( { label, icon: <TestIcon /> } );
		expect( queryByTestId( 'test-icon' ) ).not.toBeUndefined();
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderChip(
				{ label, ...props }
			),
			testId: 'test-chip'
		}
	);

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderChip(
				{ label, ...props }
			),
			testId: 'test-chip'
		}
	);

	itBehavesLike(
		'aStyledPressableComponent',
		{
			renderComponent: props => renderChip(
				{ label, ...props }
			),
			testId: 'test-chip'
		}
	);
} );
