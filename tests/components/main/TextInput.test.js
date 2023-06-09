import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { FormControl, Icon } from '../../../src';
import TextInput from '../../../src/components/main/TextInput';
import FakeBaseIcon from '../../support/FakeBaseIcon';
import WithThemeProvider from '../../support/withThemeProvider';

const TestIcon = <Icon name="icon" as={FakeBaseIcon} />;
const testIconButtonTestID = 'test-text-input-button';
const testIconTestID = `${testIconButtonTestID}-icon`;

describe( 'TextInput', () => {
	const renderComponent = props => render(
		<TextInput testID='test-text-input' {...props} />,
		{ wrapper: WithThemeProvider }
	);
	it( 'shows the provided icon ', () => {
		const { getByTestId } = renderComponent( {
			icon: TestIcon
		} );

		expect( getByTestId( testIconTestID ) ).not.toBeNull();
	} );

	it( 'calls the provided onIconPress function when the icon is pressed', () => {
		const onIconPress = jest.fn();
		const { getByTestId } = renderComponent( {
			icon: TestIcon,
			onIconPress
		} );

		fireEvent.press( getByTestId( testIconTestID ) );

		expect( onIconPress ).toHaveBeenCalled();
	} );

	it( 'applies the correct styles', () => {
		const { getByTestId } = renderComponent();

		expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
			borderWidth: 1,
			borderRadius: 8,
			borderColor: '#4F5C7B',
			padding: 1
		} );

		expect( getByTestId( 'test-text-input-rn' ) ).toHaveStyle( {
			flexGrow: 1,
			padding: 16,
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
				backgroundColor: '#EAEBFE'
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

		it( 'disables the IconButton', () => {
			const { getByTestId } = renderComponent( {
				disabled: true,
				icon: TestIcon
			} );

			expect( getByTestId( testIconButtonTestID ) ).toHaveProp(
				'accessibilityState', { disabled: true }
			);
		} );
	} );

	describe( 'when it has an error', () => {
		it( 'applies the __error styles', () => {
			const { getByTestId } = renderComponent( { error: true } );

			expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
				borderColor: '#FD3A45'
			} );
		} );
	} );

	// TODO: This should be in a shared example
	describe( 'inside a FormControl', () => {
		const testId = 'test-text-input';
		const disabledStyles = { opacity: 0.3 };
		const errorStyles = { bg: 'error.100' };
		const expectedDisabledStyles = { opacity: 0.3 };
		const expectedErrorStyles = { backgroundColor: '#FFCDD7' };

		const renderFormControl = ( { disabled, error } ) => render(
			<FormControl disabled={disabled} error={error}>
				<TextInput testID={testId} __disabled={disabledStyles} __error={errorStyles} />
			</FormControl>,
			{ wrapper: WithThemeProvider }
		);

		it( 'disables the TextInput when the FormControl is disabled', () => {
			const { getByTestId } = renderFormControl( { disabled: true } );
			expect( getByTestId( testId ) ).toHaveStyle( expectedDisabledStyles );
		} );

		it( 'marks the TextInput as invalid when the FormControl has error', () => {
			const { getByTestId } = renderFormControl( { error: 'Error!' } );
			expect( getByTestId( testId ) ).toHaveStyle( expectedErrorStyles );
		} );
	} );
} );
