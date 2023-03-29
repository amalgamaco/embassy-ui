import { Banner } from '@amalgamaco/embassy-ui';
import React from 'react';

const ExampleBanner = () => (
	<Banner
		visible
		withIcon
		variant={'success'}
		width='80%'
		onDeletePress={() => { alert( 'Delete pressed!' ); }}
	>
		Banner success text
	</Banner>
);

export default ExampleBanner;
