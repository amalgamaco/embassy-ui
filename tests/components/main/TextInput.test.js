import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import {
	extendThemeConfig, Icon, Text, ThemeProvider
} from '../../../src';
import TextInput from '../../../src/components/main/TextInput';

const FakeBaseIcon = ( { name, testID, ...props } ) => (
	<Text testID={testID} {...props}>{name}</Text>
);

const TestIcon = () => (
	<Icon name="icon" testID="test-icon" as={FakeBaseIcon} />
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

describe( 'TextInput', () => {
	const renderComponent = props => render(
		<ThemeProvider theme={customTheme}>
			<TextInput testID='test-text-input' {...props} />
		</ThemeProvider>
	);

	it( 'shows the correct icon when type=\'password\' is set', () => {
		const { getByTestId } = renderComponent( {
			type: 'password', __icon: { name: 'icon', as: TestIcon }
		} );

		expect( getByTestId( 'test-icon' ) ).toHaveTextContent( 'icon' );
	} );

	it( 'applies the correct styles', () => {
		const { getByTestId } = renderComponent( {
			type: 'password'
		} );

		expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
			flex: 1,
			borderWidth: 1,
			borderRadius: 8,
			borderColor: '#4F5C7B',
			padding: 1
		} );

		expect( getByTestId( 'test-text-input-rn' ) ).toHaveStyle( {
			flexGrow: 1,
			paddingHorizontal: 16,
			color: '#4F5C7B'
		} );
	} );

	it( 'sets the passed value as the internal text input value', () => {
		const { getByTestId } = renderComponent( { value: 'test' } );
		expect( getByTestId( 'test-text-input-rn' ) ).toHaveProp( 'value', 'test' );
	} );

	it( 'calls the onChange handler when the internal text input text changes', () => {
		const onChange = jest.fn();
		const { getByTestId } = renderComponent( { onChange } );
		fireEvent( getByTestId( 'test-text-input-rn' ), 'change' );

		expect( onChange ).toHaveBeenCalled();
	} );

	it( 'calls the onChangeText handler when the internal text input text changes', () => {
		const onChangeText = jest.fn();
		const { getByTestId } = renderComponent( { onChangeText } );
		fireEvent.changeText( getByTestId( 'test-text-input-rn' ), 'test' );

		expect( onChangeText ).toHaveBeenCalledWith( 'test' );
	} );

	describe( 'when it is disabled', () => {
		it( 'applies the __disabled styles', () => {
			const { getByTestId } = renderComponent( { disabled: true } );

			expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
				backgroundColor: '#F3F3F3'
			} );

			expect( getByTestId( 'test-text-input-rn' ) ).toHaveStyle( {
				color: '#AAB2CC'
			} );
		} );

		it( 'disables the internal text input', () => {
			const { getByTestId } = renderComponent( { disabled: true } );

			expect( getByTestId( 'test-text-input-rn' ) ).toHaveProp(
				'disabled', true
			);
		} );

		it( 'disables the toggle password button', () => {
			const { getByTestId } = renderComponent( {
				disabled: true, type: 'password'
			} );

			expect( getByTestId( 'test-text-input-icon' ) ).toHaveProp(
				'accessibilityState', { disabled: true }
			);
		} );
	} );

	describe( 'when it has an error', () => {
		it( 'applies the __error styles', () => {
			const { getByTestId } = renderComponent( { error: true } );

			expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
				borderColor: '#F8727D'
			} );
		} );
	} );

	describe( 'when the type is password', () => {
		it( 'obscures the text by default', () => {
			const { getByTestId } = renderComponent( { type: 'password' } );

			expect( getByTestId( 'test-text-input-rn' ) ).toHaveProp(
				'secureTextEntry', true
			);
		} );

		it( 'shows the toggle password icon button', () => {
			const { queryByTestId } = renderComponent( { type: 'password' } );
			expect( queryByTestId( 'test-text-input-icon' ) ).not.toBeNull();
		} );

		it( 'shows the text when the toggle password icon button is pressed', () => {
			const { getByTestId } = renderComponent( { type: 'password' } );

			fireEvent.press( getByTestId( 'test-text-input-icon' ) );

			expect( getByTestId( 'test-text-input-rn' ) ).toHaveProp(
				'secureTextEntry', false
			);
		} );
	} );
} );
