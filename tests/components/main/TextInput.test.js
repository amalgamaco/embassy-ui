import { render } from '@testing-library/react-native';
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
			type: 'password', passwordIcon: <TestIcon />
		} );

		expect( getByTestId( 'test-icon' ) ).toHaveTextContent( 'icon' );
	} );

	it( 'applies the correct styles', () => {
		const { getByTestId } = renderComponent( {
			type: 'password'
		} );

		expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
			flex: 1,
			paddingHorizontal: 16,
			borderWidth: 1,
			borderRadius: 8,
			borderColor: '#4F5C7B',
			margin: 1
		} );

		expect( getByTestId( 'test-text-input-rn' ) ).toHaveStyle( {
			flexGrow: 1,
			color: '#4F5C7B'
		} );
	} );

	it( 'applies the __disabled styles when it is disabled', () => {
		const { getByTestId } = renderComponent( {
			disabled: true,
			type: 'password'
		} );

		expect( getByTestId( 'test-text-input' ) ).toHaveStyle( {
			backgroundColor: '#F3F3F3'
		} );

		expect( getByTestId( 'test-text-input-rn' ) ).toHaveStyle( {
			color: '#AAB2CC'
		} );
	} );
} );
