import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Switch from '../../../src/components/main/Switch';
import { itBehavesLike } from '../../support/sharedExamples';

const OFF_SWITCH_STYLE = { backgroundColor: '#EDF2FF', borderColor: '#4F5C7B' };
const ON_SWITCH_STYLE = { backgroundColor: '#4F80FF', borderColor: 'transparent' };

const accessibilityTest = ( {
	renderComponent,
	checked = false,
	disabled = false
} ) => {
	itBehavesLike( 'anAccessibleComponent', {
		renderComponent,
		testID: 'test-switch',
		accessibilityRole: 'switch',
		accessibilityState: { checked, disabled }
	} );
};

describe( 'Switch', () => {
	const renderSwitch = props => render(
		<Switch testID="test-switch" {...props} />,
		{ wrapper: WithThemeProvider }
	);

	describe( 'when a initial value is provided', () => {
		it( 'should render the switch with the correct initial value', () => {
			const { getByTestId } = renderSwitch( { initialValue: true } );
			expect( getByTestId( 'test-switch' ) ).toHaveStyle( ON_SWITCH_STYLE );
		} );
	} );

	describe( 'with default props', () => {
		accessibilityTest( {
			renderComponent: renderSwitch,
			checked: false,
			disabled: false
		} );

		it( 'starts off', () => {
			const { getByTestId } = renderSwitch();
			expect( getByTestId( 'test-switch' ) ).toHaveStyle( OFF_SWITCH_STYLE );
		} );

		describe( 'onPress', () => {
			describe( 'when a onChage method is provided', () => {
				it( 'should call the onChange method with the new value', () => {
					const onChange = jest.fn();
					const { getByTestId } = renderSwitch( { onChange } );
					fireEvent.press( getByTestId( 'test-switch' ) );
					expect( onChange ).toHaveBeenCalledWith( true );
				} );
			} );

			describe( 'when the button is of', () => {
				it( 'toggles the switch', () => {
					const { getByTestId } = renderSwitch();
					fireEvent.press( getByTestId( 'test-switch' ) );
					expect( getByTestId( 'test-switch' ) ).toHaveStyle( ON_SWITCH_STYLE );
				} );
			} );

			describe( 'when the button is on', () => {
				accessibilityTest( {
					renderComponent: () => renderSwitch( { initialValue: true } ),
					checked: true,
					disabled: false
				} );

				it( 'toggles the switch', () => {
					const { getByTestId } = renderSwitch( { initialValue: true } );
					fireEvent.press( getByTestId( 'test-switch' ) );
					expect( getByTestId( 'test-switch' ) ).toHaveStyle( OFF_SWITCH_STYLE );
				} );
			} );

			describe( 'when the button is disabled', () => {
				accessibilityTest( {
					renderComponent: () => renderSwitch( { disabled: true } ),
					checked: false,
					disabled: true
				} );

				it( 'does not toggle the switch', () => {
					const { getByTestId } = renderSwitch( { disabled: true } );
					fireEvent.press( getByTestId( 'test-switch' ) );
					expect( getByTestId( 'test-switch' ) ).toHaveProp(
						'accessibilityState', { disabled: true, checked: false }
					);
				} );
			} );
		} );
	} );
} );
