import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Checkbox, Icon } from '../../../src';
import FakeBaseIcon from '../../support/FakeBaseIcon';
import WithThemeProvider from '../../support/withThemeProvider';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TestIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

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
		<Checkbox
			testID="test-checkbox"
			isIndeterminated={isIndeterminated}
			isSelected={isSelected}
			{...props}
		/>,
		{ wrapper: WithThemeProvider }
	);

	it( 'applies the __unselected styles when it is unselected', () => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( 'test-checkbox-icon' ) ).toHaveStyle( { borderColor: '#676A79' } );
		accessibilityTest( { getByTestId } );
	} );

	it( 'applies the __selected styles when it is selected', () => {
		const { getByTestId } = renderComponent( { selected: true } );
		expect( getByTestId( 'test-checkbox-icon' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
		accessibilityTest( { getByTestId, checked: true } );
	} );

	it( 'applies the __indeterminated styles when it is indeterminated', () => {
		const { getByTestId } = renderComponent( { indeterminated: true } );
		expect( getByTestId( 'test-checkbox-icon' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
		accessibilityTest( { getByTestId, checked: 'mixed' } );
	} );

	it( 'applies the __disabled styles when it is disabled', () => {
		const { getByTestId } = renderComponent( { disabled: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { opacity: 0.7 } );
		accessibilityTest( { getByTestId, disabled: true } );
	} );

	it( 'shows the custom icon', () => {
		const { getByTestId } = renderComponent( { uncheckedIcon: TestIcon() } );
		expect( getByTestId( 'test-checkbox-icon' ) ).toHaveTextContent( 'test' );
	} );

	describe( 'with label', () => {
		it( 'shows the label', () => {
			const { getByTestId } = renderComponent( { label: 'Checkbox!' } );
			expect( getByTestId( 'test-checkbox' ) ).toHaveTextContent( 'Checkbox!' );
		} );

		it( 'adds the accesibility label with the label text', () => {
			const { getByTestId } = renderComponent( { label: 'Checkbox!' } );
			expect( getByTestId( 'test-checkbox' ) ).toHaveProp( 'accessibilityLabel', 'Checkbox!' );
		} );
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

describe( 'Checkbox.Group', () => {
	const renderComponent = ( {
		disabled, value, onChange, ...props
	} = {} ) => render(
		<Checkbox.Group
			testID="test-checkbox-group"
			disabled={disabled}
			value={value}
			onChange={onChange}
			{...props}
		>
			<Checkbox value="opt-1" label="Option 1" testID="test-checkbox-1" />
			<Checkbox value="opt-2" label="Option 2" testID="test-checkbox-2" />
			<Checkbox value="opt-3" label="Option 3" testID="test-checkbox-3" />
		</Checkbox.Group>,
		{ wrapper: WithThemeProvider }
	);

	it( 'renders the children inside of it', () => {
		const { getByTestId } = renderComponent();

		expect( getByTestId( 'test-checkbox-1' ) ).toHaveTextContent( 'Option 1' );
		expect( getByTestId( 'test-checkbox-2' ) ).toHaveTextContent( 'Option 2' );
		expect( getByTestId( 'test-checkbox-3' ) ).toHaveTextContent( 'Option 3' );
	} );

	it( 'selects the checkboxes which values are inside the value prop', () => {
		const { getByTestId } = renderComponent( { value: [ 'opt-1', 'opt-3' ] } );

		expect( getByTestId( 'test-checkbox-1' ) ).toHaveProp( 'selected', true );
		expect( getByTestId( 'test-checkbox-2' ) ).toHaveProp( 'selected', false );
		expect( getByTestId( 'test-checkbox-3' ) ).toHaveProp( 'selected', true );
	} );

	it( 'disables all the checkboxes when the group is disabled', () => {
		const { getByTestId } = renderComponent( { disabled: true } );

		expect( getByTestId( 'test-checkbox-1' ) ).toHaveStyle( { 'opacity': 0.7 } );
		expect( getByTestId( 'test-checkbox-2' ) ).toHaveStyle( { 'opacity': 0.7 } );
		expect( getByTestId( 'test-checkbox-3' ) ).toHaveStyle( { 'opacity': 0.7 } );
	} );

	it( 'calls the onChange prop with the selected values when a checkbox is selected', () => {
		const onChange = jest.fn();
		const { getByTestId } = renderComponent( { value: [ 'opt-1' ], onChange } );

		fireEvent( getByTestId( 'test-checkbox-2' ), 'press' );

		expect( onChange ).toHaveBeenCalledWith( [ 'opt-1', 'opt-2' ] );
	} );

	it( 'calls the onChange prop with the selected values when a checkbox is unselected', () => {
		const onChange = jest.fn();
		const { getByTestId } = renderComponent( { value: [ 'opt-1', 'opt-3' ], onChange } );

		fireEvent( getByTestId( 'test-checkbox-3' ), 'press' );

		expect( onChange ).toHaveBeenCalledWith( [ 'opt-1' ] );
	} );
} );
