import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Icon } from '../../../src';
import PasswordInput from '../../../src/components/main/PasswordInput';
import FakeBaseIcon from '../../support/FakeBaseIcon';
import WithThemeProvider from '../../support/withThemeProvider';

const TestShowIcon = <Icon name="show" as={FakeBaseIcon} />;
const TestHideIcon = <Icon name="hide" as={FakeBaseIcon} />;
const renderComponent = props => render(
	<PasswordInput testID='test-password-input' {...props} />,
	{ wrapper: WithThemeProvider }
);

describe( 'PasswordInput', () => {
	it( 'obscures the text by default', () => {
		const { getByTestId } = renderComponent( );

		expect( getByTestId( 'test-password-input-rn' ) ).toHaveProp(
			'secureTextEntry', true
		);
	} );

	it( 'shows the toggle password icon button', () => {
		const { getByTestId } = renderComponent( );
		expect( getByTestId( 'test-password-input-button-icon' ) ).not.toBeNull();
	} );

	it( 'shows the text when the toggle password icon button is pressed', () => {
		const { getByTestId } = renderComponent( );

		fireEvent.press( getByTestId( 'test-password-input-button' ) );

		expect( getByTestId( 'test-password-input-rn' ) ).toHaveProp(
			'secureTextEntry', false
		);
	} );

	describe( 'when custom icons are provided', () => {
		it( 'shows the provided show icon', () => {
			const { getByTestId } = renderComponent( {
				showPasswordIcon: TestShowIcon
			} );
			const icon = getByTestId( 'test-password-input-button-icon' );
			expect( icon ).toHaveTextContent( 'show' );
		} );

		it( 'shows the provided hide icon', () => {
			const { getByTestId } = renderComponent( {
				hidePasswordIcon: TestHideIcon
			} );

			fireEvent.press( getByTestId( 'test-password-input-button' ) );

			expect( getByTestId( 'test-password-input-button-icon' ) ).toHaveTextContent( 'hide' );
		} );
	} );

	describe( 'when the password is not secure by default', () => {
		it( 'shows the password text', () => {
			const { getByTestId } = renderComponent( { defaultSecure: false } );

			expect( getByTestId( 'test-password-input-rn' ) ).toHaveProp(
				'secureTextEntry', false
			);
		} );
	} );
} );
