import { render } from '@testing-library/react-native';
import React from 'react';
import { FormControl } from '../../../src';
import WithThemeProvider from '../../support/withThemeProvider';

describe( 'FormControl', () => {
	const renderComponent = ( props = {} ) => render(
		<FormControl
			testID="test-form-control"
			{...props}
		/>,
		{ wrapper: WithThemeProvider }
	);

	it( 'shows a label when set', () => {
		const label = 'Label!';
		const { getByTestId } = renderComponent( { label } );
		expect( getByTestId( 'test-form-control-label' ) ).toHaveTextContent( label );
	} );

	it( 'shows the required indicator when is required', () => {
		const label = 'Label!';
		const { getByTestId } = renderComponent( { label, isRequired: true } );
		expect( getByTestId( 'test-form-control-label-required' ) ).toHaveTextContent( '*' );
	} );

	it( 'doesn\'t show the required indicator when is not required ', () => {
		const label = 'Label!';
		const { queryByTestId } = renderComponent( { label, isRequired: false } );
		expect( queryByTestId( 'test-form-control-label-required' ) ).toBeNull();
	} );

	it( 'doesn\'t show the required indicator when there is not label set even if it\'s required ', () => {
		const { queryByTestId } = renderComponent( { isRequired: true } );
		expect( queryByTestId( 'test-form-control-label-required' ) ).toBeNull();
	} );

	it( 'shows the hint when set', () => {
		const hint = 'Hint text!';
		const { getByTestId } = renderComponent( { hint } );
		expect( getByTestId( 'test-form-control-helper-text' ) ).toHaveTextContent( hint );
	} );

	it( 'shows the error when set', () => {
		const error = 'Error text!';
		const { getByTestId } = renderComponent( { error } );
		expect( getByTestId( 'test-form-control-helper-text' ) ).toHaveTextContent( error );
	} );

	it( 'shows the error icon when there is an error set', () => {
		const error = 'Error text!';
		const { getByTestId } = renderComponent( { error } );
		expect( getByTestId( 'test-form-control-helper-text-error-icon' ) ).not.toBeNull();
	} );

	it( 'shows the error when hint and error are both set', () => {
		const hint = 'Hint text!';
		const error = 'Error text!';
		const { getByTestId } = renderComponent( { hint, error } );
		expect( getByTestId( 'test-form-control-helper-text' ) ).not.toHaveTextContent( hint );
		expect( getByTestId( 'test-form-control-helper-text' ) ).toHaveTextContent( error );
	} );

	it( 'doesn\'t show the helper text when there is not hint nor error', () => {
		const { queryByTestId } = renderComponent();
		expect( queryByTestId( 'test-form-control-helper-text' ) ).toBeNull();
	} );

	it( 'applies the disabled styles when is disabled', () => {
		const { getByTestId } = renderComponent( { disabled: true, hint: 'Hint!' } );
		expect( getByTestId( 'test-form-control-helper-text' ) ).toHaveStyle( { color: '#AAB2CC' } );
	} );
} );
