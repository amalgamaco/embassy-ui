import React from 'react';
import { render } from '@testing-library/react-native';
import WithThemeProvider from '../../support/withThemeProvider';

import Image from '../../../src/components/main/Image';

const { itBehavesLike } = require( '../../support/sharedExamples' );

describe( 'Image', () => {
	const renderImage = props => render(
		<Image testID="test-image" {...props} />,
		{ wrapper: WithThemeProvider }
	);

	itBehavesLike(
		'aStyledSystemComponent',
		{
			renderComponent: props => renderImage( props ),
			testId: 'test-image'
		}
	);
} );
