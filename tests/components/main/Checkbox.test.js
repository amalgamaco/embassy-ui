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

describe( 'Checkbox', () => {
	const renderComponent = ( { isIndeterminated, isSelected, props } = {} ) => render(
		<ThemeProvider theme={customTheme}>
			<Checkbox isIndeterminated={isIndeterminated} isSelected={isSelected} {...props} testID="test-checkbox" />
		</ThemeProvider>
	);

	it( 'applies the __unselected styles when it is unselected', () => {
		const { getByTestId } = renderComponent();
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#676A79' } );
	} );

	it( 'applies the __selected styles when it is selected', () => {
		const { getByTestId } = renderComponent( { isSelected: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
	} );

	it( 'applies the __indeterminate styles when it is indeterminated', () => {
		const { getByTestId } = renderComponent( { isIndeterminated: true } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { borderColor: '#4F80FF' } );
	} );

	it( 'applies the __disabled styles when it is disabled', () => {
		const { getByTestId } = renderComponent( { props: { disabled: true } } );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { opacity: 0.7 } );
	} );

	it( 'applies the __pressed styles when it is pressed', () => {
		const { getByTestId } = renderComponent( { isIndeterminated: true } );
		fireEvent( getByTestId( 'test-checkbox' ), 'pressIn' );
		expect( getByTestId( 'test-checkbox' ) ).toHaveStyle( { backgroundColor: '#EDF2FF' } );
	} );
} );
