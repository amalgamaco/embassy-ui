import React from 'react';
import type { IConditionalRenderProps } from './types';

const ConditionalRender = ( { children, render }: IConditionalRenderProps ) => (
	<>
		{render ? children : null}
	</>
);

export default ConditionalRender;
