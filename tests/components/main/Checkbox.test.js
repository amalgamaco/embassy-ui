import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import {
	Checkbox, extendThemeConfig, Icon, Text, ThemeProvider
} from '../../../src';

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
	const renderComponent = ( { isIndeterminated, isSelected, props } = {} ) => render(
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

	it( 'applies the __indeterminate styles when it is indeterminated', () => {
		const { getByTestId } = renderComponent( { isIndeterminated: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
		accessibilityTest( { getByTestId, checked: 'mixed' } );
	} );

	it( 'applies the __disabled styles when it is disabled', () => {
		const { getByTestId } = renderComponent( { props: { disabled: true } } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { opacity: 0.7 } );
		accessibilityTest( { getByTestId, disabled: true } );
	} );

	it( 'applies the __pressed styles when it is pressed', () => {
		const { getByTestId } = renderComponent();
		fireEvent( getByTestId( 'test-checkbox' ), 'pressIn' );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { backgroundColor: '#EDF2FF' } );
		accessibilityTest( { getByTestId } );
	} );
} );
