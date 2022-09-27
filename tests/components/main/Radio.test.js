import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import {
	Radio, ThemeProvider
} from '../../../src';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TEST_ID = 'test-radio';

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

describe( 'Radio', () => {
	const renderRadio = ( {
		selected = false, onPress, disabled, ...props
	} = {} ) => render(
		<ThemeProvider>
			<Radio
				testID="test-radio"
				selected={selected}
				onPress={onPress}
				disabled={disabled}
				{...props}
			/>
		</ThemeProvider>
	);

	test( 'renders the unselected style when unselected', () => {
		const { getByTestId } = renderRadio();
		expect( getByTestId( `${TEST_ID}-icon` ) ).toHaveChildWithProp( 'stroke', '#676A79' );
		accessibilityTest( { getByTestId } );
	} );

	test( 'renders the selected style when selected', () => {
		const { getByTestId } = renderRadio( { selected: true } );
		expect( getByTestId( `${TEST_ID}-icon` ) ).toHaveChildWithProp( 'stroke', '#4F80FF' );
		accessibilityTest( { getByTestId, checked: true } );
	} );

	describe( 'when onPress function is provided', () => {
		test( 'calls onPress function when pressed', () => {
			const onPress = jest.fn();
			const { getByTestId } = renderRadio( { onPress } );
			fireEvent.press( getByTestId( TEST_ID ) );
			expect( onPress ).toHaveBeenCalled();
		} );
	} );

	describe( 'when the radio button is disabled', () => {
		describe( 'when pressed', () => {
			test( 'does not calls onPress', () => {
				const onPress = jest.fn();
				const { queryByTestId } = renderRadio( { disabled: true, onPress } );
				fireEvent.press( queryByTestId( TEST_ID ) );
				expect( onPress ).not.toHaveBeenCalled();
			} );
		} );
		describe( 'when is unselected', () => {
			it( 'should render the disabled style', () => {
				const { getByTestId } = renderRadio( { disabled: true } );
				expect( getByTestId( `${TEST_ID}-icon` ) ).toHaveChildWithProp( 'stroke', '#B0B4CD' );
				accessibilityTest( { getByTestId, disabled: true } );
			} );
		} );

		describe( 'when is selected', () => {
			it( 'should render the disabled style', () => {
				const { getByTestId } = renderRadio( { disabled: true, selected: true } );
				expect( getByTestId( `${TEST_ID}-icon` ) ).toHaveChildWithProp( 'stroke', '#B0B4CD' );
				accessibilityTest( {
					getByTestId, disabled: true, checked: true
				} );
			} );
		} );
	} );

	itBehavesLike(
		'aPressableComponent',
		{
			renderComponent: props => renderRadio( props ),
			testId: 'test-radio'
		}
	);

	itBehavesLike(
		'aStyledPressableComponent',
		{
			renderComponent: props => renderRadio( props ),
			testId: 'test-radio'
		}
	);
} );

describe( 'Radio.Group', () => {
	const renderComponent = ( {
		disabled, value, onChange, ...props
	} = {} ) => render(
		<ThemeProvider>
			<Radio.Group
				testID="test-radio-group"
				disabled={disabled}
				value={value}
				onChange={onChange}
				{...props}
			>
				<Radio value="opt-1" label="Option 1" testID="test-radio-1" />
				<Radio value="opt-2" label="Option 2" testID="test-radio-2" />
				<Radio value="opt-3" label="Option 3" testID="test-radio-3" />
			</Radio.Group>
		</ThemeProvider>
	);

	it( 'renders the children inside of it', () => {
		const { getByTestId } = renderComponent();

		expect( getByTestId( 'test-radio-1' ) ).toHaveTextContent( 'Option 1' );
		expect( getByTestId( 'test-radio-2' ) ).toHaveTextContent( 'Option 2' );
		expect( getByTestId( 'test-radio-3' ) ).toHaveTextContent( 'Option 3' );
	} );

	it( 'selects the radio buttons which value is equal to the value prop', () => {
		const { getByTestId } = renderComponent( { value: 'opt-3' } );

		expect( getByTestId( 'test-radio-1' ) ).toHaveProp( 'selected', false );
		expect( getByTestId( 'test-radio-2' ) ).toHaveProp( 'selected', false );
		expect( getByTestId( 'test-radio-3' ) ).toHaveProp( 'selected', true );
	} );

	it( 'disables all the radio buttons when the group is disabled', () => {
		const { getByTestId } = renderComponent( { disabled: true } );

		expect( getByTestId( 'test-radio-1-icon' ) ).toHaveChildWithProp( 'stroke', '#B0B4CD' );
		expect( getByTestId( 'test-radio-2-icon' ) ).toHaveChildWithProp( 'stroke', '#B0B4CD' );
		expect( getByTestId( 'test-radio-3-icon' ) ).toHaveChildWithProp( 'stroke', '#B0B4CD' );
	} );

	it( 'calls the onChange prop with the selected value when a radio is selected', () => {
		const onChange = jest.fn();
		const { getByTestId } = renderComponent( { value: 'opt-1', onChange } );

		fireEvent( getByTestId( 'test-radio-2' ), 'press' );

		expect( onChange ).toHaveBeenCalledWith( 'opt-2' );
	} );

	it( 'unselects all the other radio buttons when on of the is selected', () => {
		const onChange = jest.fn();
		const { getByTestId } = renderComponent( { value: 'opt-1', onChange } );

		fireEvent( getByTestId( 'test-radio-3' ), 'press' );

		expect( getByTestId( 'test-radio-1' ) ).toHaveProp(
			'accessibilityState', { checked: false, disabled: false }
		);
		expect( getByTestId( 'test-radio-2' ) ).toHaveProp(
			'accessibilityState', { checked: false, disabled: false }
		);
		expect( getByTestId( 'test-radio-3' ) ).toHaveProp(
			'accessibilityState', { checked: true, disabled: false }
		);
	} );
} );
