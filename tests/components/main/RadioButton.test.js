import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import {
	RadioButton, ThemeProvider
} from '../../../src';

const TEST_ID = 'test-radio-button';

const accessibilityTest = ( {
	getByTestId,
	testID = TEST_ID,
	checked = false,
	disabled = false
} ) => {
	expect( getByTestId( testID ) ).toHaveProp( 'accessible', true );
	expect( getByTestId( testID ) ).toHaveProp( 'accessibilityRole', 'radio' );
	expect( getByTestId( testID ) ).toHaveProp( 'accessibilityState', { checked, disabled } );
};

const hasChildWithProp = ( elem, prop, value ) => {
	let hasProperty = false;
	for ( let index = 0; index < elem.children.length && !hasProperty; index += 1 ) {
		const element = elem.children[ index ];
		if ( element.props[ prop ] === value || hasChildWithProp( element, prop, value ) ) {
			hasProperty = true;
		}
	}
	return hasProperty;
};

describe( 'RadioButton', () => {
	const renderRadioButton = ( { selected = false, onPress, disabled } = {} ) => render(
		<ThemeProvider>
			<RadioButton
				testID="test-radio-button"
				selected={selected}
				onPress={onPress}
				disabled={disabled}
			/>
		</ThemeProvider>
	);

	test( 'renders the unselected style when unselected', () => {
		const { getByTestId } = renderRadioButton();
		const icon = getByTestId( `${TEST_ID}-icon` );
		expect( hasChildWithProp( icon, 'stroke', '#676A79' ) ).toBe( true );
		accessibilityTest( { getByTestId } );
	} );

	test( 'renders the selected style when selected', () => {
		const { getByTestId } = renderRadioButton( { selected: true } );
		const icon = getByTestId( `${TEST_ID}-icon` );
		expect( hasChildWithProp( icon, 'stroke', '#4F80FF' ) ).toBe( true );
		accessibilityTest( { getByTestId, checked: true } );
	} );

	describe( 'when onPress function is provided', () => {
		test( 'calls onPress function when pressed', () => {
			const onPress = jest.fn();
			const { getByTestId } = renderRadioButton( { onPress } );
			fireEvent.press( getByTestId( TEST_ID ) );
			expect( onPress ).toHaveBeenCalled();
		} );
	} );

	describe( 'when the radio button is disabled', () => {
		describe( 'when pressed', () => {
			test( 'does not calls onPress', () => {
				const onPress = jest.fn();
				const { queryByTestId } = renderRadioButton( { disabled: true, onPress } );
				fireEvent.press( queryByTestId( TEST_ID ) );
				expect( onPress ).not.toHaveBeenCalled();
			} );
		} );
		describe( 'when is unselected', () => {
			it( 'should render the disabled style', () => {
				const { getByTestId } = renderRadioButton( { disabled: true } );
				const icon = getByTestId( `${TEST_ID}-icon` );
				expect( hasChildWithProp( icon, 'stroke', '#B0B4CD' ) ).toBe( true );
				accessibilityTest( { getByTestId, disabled: true } );
			} );
		} );

		describe( 'when is selected', () => {
			it( 'should render the disabled style', () => {
				const { getByTestId } = renderRadioButton( { disabled: true, selected: true } );
				const icon = getByTestId( `${TEST_ID}-icon` );
				expect( hasChildWithProp( icon, 'stroke', '#B0B4CD' ) ).toBe( true );
				accessibilityTest( {
					getByTestId, disabled: true, checked: true
				} );
			} );
		} );
	} );
} );
