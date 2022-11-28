import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import DateInput from '../../../src/components/main/DateInput';
import FakeBaseIcon from '../../support/FakeBaseIcon';
import WithThemeProvider from '../../support/withThemeProvider';

const testIconButtonTestID = 'test-text-input-button';
const testIconTestID = `${testIconButtonTestID}-icon`;

const CURRENT_LOCALE = 'en-US';
jest.mock( '../../../src/components/main/DateInput/utils/locale', () => {
	const actual = jest.requireActual( '../../../src/components/main/DateInput/utils/locale' );
	return {
		...actual,
		getCurrentLocaleCode: jest.fn( () => CURRENT_LOCALE )
	};
} );

describe( 'DateInput', () => {
	const renderComponent = props => render(
		<DateInput testID='test-date-input' {...props} />,
		{ wrapper: WithThemeProvider }
	);

	it( 'shows by default an input with the default format for the current locale as placeholder', () => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'placeholder', 'MM/dd/yyyy' );
	} );

	it( 'sets the keyboard type numeric for the input', () => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'keyboardType', 'numeric' );
	} );

	it( 'shows an icon button to open the calendar', () => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( 'test-date-input-button-icon' ) ).not.toBeNull();
	} );

	describe( 'for a specific locale', () => {
		const locale = 'es-AR';

		it( 'sets the default format for that locale as placeholder', () => {
			const { getByTestId } = renderComponent( { locale } );
			expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'placeholder', 'dd/MM/yyyy' );
		} );

		it( 'sets the locale to the date picker', () => {
			const { getByTestId } = renderComponent( { locale } );
			expect( getByTestId( 'test-date-input-date-picker' ) ).toHaveProp( 'locale', locale );
		} );
	} );

	describe( 'with a specific format', () => {
		const format = 'dd/MM/yyyy';

		it( 'sets that format as placeholder', () => {
			const { getByTestId } = renderComponent( { format } );
			expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'placeholder', 'dd/MM/yyyy' );
		} );
	} );

	describe( 'when the calendar button icon is pressed', () => {
		it( 'shows the date picker', () => {
			const { getByTestId } = renderComponent();
			fireEvent.press( getByTestId( 'test-date-input-button-icon' ) );
			expect( getByTestId( 'test-date-input-date-picker' ) ).toHaveProp( 'open', true );
		} );
	} );

	describe( 'when a date is selected in the picker', () => {
		const selectedDate = new Date( '2022-12-01' );

		it( 'shows the date in the text input with the correct format', () => {
			const { getByTestId } = renderComponent();
			fireEvent( getByTestId( 'test-date-input-date-picker' ), 'confirm', selectedDate );
			expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'value', '12/01/2022' );
		} );

		it( 'calls on change with the selected date string with the correct format', () => {
			const onChange = jest.fn();
			const { getByTestId } = renderComponent( { onChange } );
			fireEvent( getByTestId( 'test-date-input-date-picker' ), 'confirm', selectedDate );
			expect( onChange ).toHaveBeenCalledWith( '12/01/2022' );
		} );
	} );

	describe( 'when the user inputs a numeric date', () => {
		it( 'shows the date in the text input with the correct format', () => {
			const { getByTestId } = renderComponent();
			fireEvent( getByTestId( 'test-date-input-rn' ), 'changeText', '12012022' );
			expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'value', '12/01/2022' );
		} );

		it( 'calls on change with the selected date string with the correct format', () => {
			const onChange = jest.fn();
			const { getByTestId } = renderComponent( { onChange } );
			fireEvent( getByTestId( 'test-date-input-rn' ), 'changeText', '12012022' );
			expect( onChange ).toHaveBeenCalledWith( '12/01/2022' );
		} );
	} );

	describe( 'when the user inputs invalid characters for the date', () => {
		it( 'masks the input and shows only the valid characters', () => {
			const { getByTestId } = renderComponent();
			fireEvent( getByTestId( 'test-date-input-rn' ), 'changeText', '120ASD120EWQ-22' );
			expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'value', '12/01/2022' );
		} );
	} );

	describe( 'when the user inputs more characters than needed for a date', () => {
		it( 'masks the input and shows only the correct amount of characters', () => {
			const { getByTestId } = renderComponent();
			fireEvent( getByTestId( 'test-date-input-rn' ), 'changeText', '1203202122' );
			expect( getByTestId( 'test-date-input-rn' ) ).toHaveProp( 'value', '12/03/2021' );
		} );
	} );
} );
