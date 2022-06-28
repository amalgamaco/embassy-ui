import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Icon from '../../../src/components/main/Icon';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const FakeBaseIcon = props => (
	<View {...props} />
);

describe( 'Icon', () => {
	const renderComponent = props => render(
		<Icon testID="test-icon" name="test" as={FakeBaseIcon} {...props} />,
		{ wrapper: WithThemeProvider }
	);

	it( 'passes the name to the the base icon component', () => {
		const { getByTestId } = renderComponent( { name: 'close' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'name', 'close' );
	} );

	it( 'translates the size alias an sets it to the base icon component', () => {
		const { getByTestId } = renderComponent( { size: 'sm' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'size', 18 );
	} );

	it( 'translates the color alias and sets it to the base icon component', () => {
		const { getByTestId } = renderComponent( { color: 'primary.400' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'color', '#999AB8' );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-icon',
			omitProps: [ 'color' ]
		}
	);
} );
