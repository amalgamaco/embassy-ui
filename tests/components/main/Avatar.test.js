import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';
import Avatar from '../../../src/components/main/Avatar';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TEST_SRC = 'https://avatars.githubusercontent.com/u/1174405?v=4';
describe( 'Avatar', () => {
	const renderAvatar = ( { src, ...props } = {} ) => render(
		<Avatar src={src} testID="test-avatar" {...props} />,
		{ wrapper: WithThemeProvider }
	);

	it( 'renders the provided source image', () => {
		const { getByTestId } = renderAvatar( { src: TEST_SRC } );
		expect( getByTestId( 'test-avatar' ) ).not.toBeNull();
	} );

	it( 'renders the provided size', () => {
		const { getByTestId } = renderAvatar( { size: 'xl' } );
		expect( getByTestId( 'test-avatar' ) ).toHaveStyle( { width: 160, height: 160 } );
	} );

	describe( 'when an alternative text is provided', () => {
		it( 'uses it for the accessibilityLabel', () => {
			const { getByTestId } = renderAvatar( { alt: 'user' } );
			expect( getByTestId( 'test-avatar' ) ).toHaveProp( 'accessibilityLabel', "user's avatar" );
		} );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderAvatar( props ),
			testId: 'test-avatar',
			omitProps: [ 'borderRadius' ]
		}
	);

	itBehavesLike(
		'anAccessibleComponent',
		{
			renderComponent: props => renderAvatar( props ),
			testID: 'test-avatar',
			accessible: true,
			accessibilityRole: 'image',
			accessibilityLabel: 'Avatar',
			omitProps: [ 'accessibilityState' ]
		} );
} );
