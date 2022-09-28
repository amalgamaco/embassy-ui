import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import IconButton from '../../../src/components/main/IconButton';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const FakeBaseIcon = props => (
	<View {...props} />
);

describe( 'IconButton', () => {
	const renderComponent = ( { __icon, ...props } ) => render(
		<IconButton
			testID='test-button'
			name="test"
			as={FakeBaseIcon}
			__icon={{
				...__icon,
				testID: 'test-icon'
			}}
			{...props}
		/>,
		{ wrapper: WithThemeProvider }
	);

	it( 'renders the correct icon', () => {
		const { getByTestId } = renderComponent( { name: 'close' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'name', 'close' );
	} );

	it( 'translates the size alias an sets it to the base icon component', () => {
		const { getByTestId } = renderComponent( { size: 'sm' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'size', 24 );
	} );

	it( 'translates the color alias and sets it to the base icon component', () => {
		const { getByTestId } = renderComponent( { color: 'primary.400' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'color', '#475993' );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-button',
			omitProps: [ 'color' ]
		}
	);

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-button'
		}
	);

	itBehavesLike(
		'aStyledPressableComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-button'
		}
	);
} );
