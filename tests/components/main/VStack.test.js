import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import VStack from '../../../src/components/main/Stack/VStack';
import Box from '../../../src/components/main/Box';
import Text from '../../../src/components/main/Text';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'VStack', () => {
	const renderStack = props => render(
		<VStack testID="test-stack" {...props} >
			<Box testID='box-1'><Text>Box 1</Text></Box>
			<Box testID='box-2'><Text>Box 2</Text></Box>
			<Box testID='box-3'><Text>Box 3</Text></Box>
			<Box testID='box-4'><Text>Box 4</Text></Box>
		</VStack>,
		{ wrapper: WithThemeProvider }
	);

	itBehavesLike(
		'aStack',
		{
			renderComponent: props => renderStack( props ),
			testId: 'test-stack',
			direction: 'column',
			expectedChildrenTexts: [ 'Box 1', 'Box 2', 'Box 3', 'Box 4' ],
			childTestIdPattern: /box-*/
		}
	);

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderStack( props ),
			testId: 'test-stack'
		}
	);
} );
