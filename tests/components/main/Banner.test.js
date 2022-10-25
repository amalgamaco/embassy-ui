import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';
import { Banner } from '../../../src';
import Icon from '../../../src/components/main/Icon';
import FakeBaseIcon from '../../support/FakeBaseIcon';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TestIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

describe( 'Banner', () => {
	const text = 'Text';

	const renderBanner = ( {
		testID = 'test-banner',
		...props
	} ) => render(
		<Banner testID={testID} {...props}>{props.text}</Banner>,
		{ wrapper: WithThemeProvider }
	);

	it( 'shows the passed text', () => {
		const { getByTestId } = renderBanner( { text } );
		expect( getByTestId( 'test-banner' ) ).toHaveTextContent( text );
	} );

	describe( 'when the onDeletePress prop it\'s set', () => {
		it( 'shows an delete icon', () => {
			const onDeletePress = jest.fn();
			const { queryByTestId } = renderBanner( { onDeletePress } );
			expect( queryByTestId( 'test-banner-delete-icon' ) ).not.toBeUndefined();
		} );

		it( 'calls onDeletePress when the delete icon is pressed', () => {
			const onDeletePress = jest.fn();
			const { getByTestId } = renderBanner( { onDeletePress } );
			fireEvent.press( getByTestId( 'test-banner-delete-icon' ) );
			expect( onDeletePress ).toHaveBeenCalled();
		} );
	} );

	describe( 'when the banner has a valid variant', () => {
		it( 'shows the banner icon', () => {
			const { queryByTestId } = renderBanner( { variant: 'success' } );
			expect( queryByTestId( 'test-banner-icon' ) ).not.toBeUndefined();
		} );
	} );

	describe( 'when the banner has an invalid variant', () => {
		describe( 'and icon prop it\'s set', () => {
			it( 'does not show the banner icon', () => {
				const { queryByTestId } = renderBanner( { variant: 'testing' } );
				expect( queryByTestId( 'test-banner-icon' ) ).toBeNull();
			} );
		} );

		describe( 'and icon prop it\'s not set', () => {
			it( 'shows the banner icon', () => {
				const { queryByTestId } = renderBanner( { variant: 'testing', icon: <TestIcon /> } );
				expect( queryByTestId( 'test-banner-icon' ) ).not.toBeUndefined();
			} );
		} );
	} );

	it( 'shows an icon when it\'s set', () => {
		const { queryByTestId } = renderBanner( { icon: <TestIcon /> } );
		expect( queryByTestId( 'test-icon' ) ).not.toBeUndefined();
	} );

	describe( 'when the banner does not have testID', () => {
		it( 'does not render the testID on the icon', () => {
			const { queryByTestId } = renderBanner( { variant: 'success', testID: null } );
			expect( queryByTestId( 'test-banner-icon' ) ).toBeNull();
		} );

		it( 'does not render the testID on the delete icon', () => {
			const onDeletePress = jest.fn();
			const { queryByTestId } = renderBanner( { variant: 'success', testID: null, onDeletePress } );
			expect( queryByTestId( 'test-banner-delete-icon' ) ).toBeNull();
		} );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderBanner(
				{ text, ...props }
			),
			testId: 'test-banner',
			omitProps: [ 'backgroundColor' ]
		}
	);
} );
