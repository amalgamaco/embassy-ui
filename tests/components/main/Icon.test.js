import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import { ThemeProvider } from '../../../src/core/theme/context';
import WithThemeProvider from '../../support/withThemeProvider';
import extendThemeConfig from '../../../src/core/theme/extendThemeConfig';

import Icon from '../../../src/components/main/Icon';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const FakeBaseIcon = props => (
	<View {...props} />
);

const hideConsoleErrors = ( callback ) => {
	/* eslint-disable no-console */
	const originalConsoleError = console.error;
	console.error = jest.fn();

	callback();

	console.error = originalConsoleError;
	/* eslint-enable no-console */
};

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

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'size', 24 );
	} );

	it( 'translates the color alias and sets it to the base icon component', () => {
		const { getByTestId } = renderComponent( { color: 'primary.400' } );

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'color', '#475993' );
	} );

	it( 'renders normally when the `as` prop is not provided but there is a default prop for it', () => {
		const theme = extendThemeConfig( {
			components: {
				Icon: {
					defaultProps: {
						as: FakeBaseIcon
					}
				}
			}
		} );

		const { getByTestId } = render(
			<ThemeProvider theme={theme}>
				<Icon name="test" testID="test-icon" />
			</ThemeProvider>
		);

		expect( getByTestId( 'test-icon' ) ).toHaveProp( 'name', 'test' );
	} );

	it( 'throws an error when the `as` prop is not provided and there is not default prop for it', () => hideConsoleErrors(
		() => {
			expect( () => render( <Icon name="test" /> ) )
				.toThrow(
					'The `as` prop is required for the Icon component. You must supply it in the component '
					+ 'props or in the Theme config as the component\'s default props.'
				);
		} )
	);

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-icon',
			omitProps: [ 'color' ]
		}
	);
} );
