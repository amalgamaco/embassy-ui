import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Text } from 'react-native';
import WithThemeProvider from '../../support/withThemeProvider';
import Icon from '../../../src/components/main/Icon';
import { Dialog } from '../../../src/components/main/Dialog';
import FakeBaseIcon from '../../support/FakeBaseIcon';

const { itBehavesLike } = require( '../../support/sharedExamples' );

const TestCloseIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

const TestIcon = () => (
	<Icon name="test" testID="test-icon" as={FakeBaseIcon} />
);

describe( 'Dialog', () => {
	const title = 'Title';
	const body = 'Body';

	const renderDialog = ( {
		testID = 'test-dialog',
		...props
	} ) => render(
		<Dialog testID={testID} {...props}>
			<Dialog.Header title={props.title} />
			<Dialog.Body>
				<Text>{props.body}</Text>
			</Dialog.Body>
			<Dialog.Footer />
		</Dialog>,
		{ wrapper: WithThemeProvider }
	);

	it( 'shows the passed title and body text', () => {
		const { getByTestId } = renderDialog( { title, body } );

		expect( getByTestId( 'test-dialog-header' ) ).toHaveTextContent( title );
		expect( getByTestId( 'test-dialog-body' ) ).toHaveTextContent( body );
	} );

	it( 'hides the modal when the isVisible prop it\'s set to false', () => {
		const isVisible = false;
		const { getByTestId } = renderDialog( { isVisible } );

		expect( getByTestId( 'test-dialog' ) ).toHaveProp( 'visible', false );
	} );

	describe( 'when the onClosePress prop it\'s set', () => {
		it( 'shows an close icon', () => {
			const onClosePress = jest.fn();
			const { queryByTestId } = renderDialog( { onClosePress } );
			expect( queryByTestId( 'test-dialog-delete-icon' ) ).not.toBeUndefined();
		} );

		it( 'calls onClosePress when the close icon is pressed', () => {
			const onClosePress = jest.fn();
			const { queryByTestId } = renderDialog( { onClosePress } );
			fireEvent.press( queryByTestId( 'test-dialog-close-icon' ) );
			expect( onClosePress ).toHaveBeenCalled();
		} );
	} );

	it( 'hides the icon when the withIcon prop it\'s set to false', () => {
		const withIcon = false;
		const { queryByTestId } = renderDialog( { withIcon } );

		expect( queryByTestId( 'test-dialog-icon' ) ).toBeNull();
	} );

	it( 'shows an icon when the icon prop it\'s set', () => {
		const { queryByTestId } = renderDialog( { icon: <TestIcon /> } );

		expect( queryByTestId( 'test-dialog-icon' ) ).not.toBeUndefined();
	} );

	it( 'shows an close icon when the close icon prop it\'s set', () => {
		const { queryByTestId } = renderDialog( { closeIcon: <TestCloseIcon /> } );

		expect( queryByTestId( 'test-dialog-close-icon' ) ).not.toBeUndefined();
	} );

	describe( 'when the Dialog does not have testID', () => {
		it( 'does not render the testID on the icon', () => {
			const { queryByTestId } = renderDialog( { testID: null } );
			expect( queryByTestId( 'test-dialog-icon' ) ).toBeNull();
		} );

		it( 'does not render the testID on the close icon', () => {
			const onDeletePress = jest.fn();
			const { queryByTestId } = renderDialog( { testID: null, onDeletePress } );
			expect( queryByTestId( 'test-dialog-close-icon' ) ).toBeNull();
		} );
	} );

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderDialog(
				{ title, ...props }
			),
			testId: 'dialog-container',
			omitProps: [ 'backgroundColor' ]
		}
	);
} );
