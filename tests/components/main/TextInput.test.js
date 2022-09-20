import { render } from '@testing-library/react-native';
import React from 'react';
import TextInput from '../../../src/components/main/TextInput';
import WithThemeProvider from '../../support/withThemeProvider';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'TextInput', () => {
	const renderTextInput = props => render(
		<TextInput testID='test-text-input' {...props} />,
		{ wrapper: WithThemeProvider }
	);

	itBehavesLike( 'aStyledSystemComponent',
		{
			renderComponent: props => renderTextInput( props ),
			testId: 'test-text-input',
			omitProps: [ 'gap', 'tintColor' ]
		} );
} );
