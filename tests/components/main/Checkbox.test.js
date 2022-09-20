import { render } from '@testing-library/react-native';
import React from 'react';
import {
	Checkbox, extendThemeConfig, Icon, Text, ThemeProvider
} from '../../../src';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const FakeBaseIcon = ( { name, testID, ...props } ) => (
	<Text testID={testID} {...props}>{name}</Text>
);

const TestIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

const customTheme = extendThemeConfig( {
	components: {
		Icon: {
			defaultProps: {
				as: TestIcon
			}
		}
	}
} );

const accessibilityTest = ( {
	getByTestId,
	testID = 'test-checkbox',
	checked = false,
	disabled = false
} ) => {
	expect( getByTestId( testID ) ).toHaveProp( 'accessible', true );
	expect( getByTestId( testID ) ).toHaveProp( 'accessibilityRole', 'checkbox' );
	expect( getByTestId( testID ) ).toHaveProp( 'accessibilityState', { checked, disabled } );
};

describe( 'Checkbox', () => {
	const renderComponent = ( { isIndeterminated, isSelected, ...props } = {} ) => render(
		<ThemeProvider theme={customTheme}>
			<Checkbox
				testID="test-checkbox"
				isIndeterminated={isIndeterminated}
				isSelected={isSelected}
				{...props}
			/>
		</ThemeProvider>
	);

	it( 'applies the __unselected styles when it is unselected', () => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#676A79' } );
		accessibilityTest( { getByTestId } );
	} );

	it( 'applies the __selected styles when it is selected', () => {
		const { getByTestId } = renderComponent( { isSelected: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
		accessibilityTest( { getByTestId, checked: true } );
	} );

	it( 'applies the __indeterminated styles when it is indeterminated', () => {
		const { getByTestId } = renderComponent( { isIndeterminated: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
		accessibilityTest( { getByTestId, checked: 'mixed' } );
	} );

	it( 'applies the __disabled styles when it is disabled', () => {
		const { getByTestId } = renderComponent( { disabled: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { opacity: 0.7 } );
		accessibilityTest( { getByTestId, disabled: true } );
	} );

	it( 'shows the custom icon', () => {
		const { getByTestId } = renderComponent( { uncheckedIcon: TestIcon() } );
		expect( getByTestId( 'test-icon' ) ).toHaveTextContent( 'test' );
	} );

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-checkbox'
		}
	);

	itBehavesLike(
		'aStyledPressableComponent',
		{
			renderComponent: props => renderComponent( props ),
			testId: 'test-checkbox'
		}
	);
} );
