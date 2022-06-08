import React, { useMemo } from 'react';
import { useTheme } from '../core/theme/hooks';
import Box from '../components/main/Box';
import type { IStackProps } from '../components/main/Stack/types';
import type { Theme } from '..';

interface IUseSpacedChildrenProps {
	children: IStackProps[ 'children' ],
	space?: IStackProps[ 'margin' ],
	direction: IStackProps[ 'direction' ],
	reversed?: IStackProps[ 'reversed' ]
}

interface IGetSpacerStyleProps {
	theme: Theme,
	space: IStackProps[ 'margin' ],
	direction: IStackProps[ 'direction' ]
}

const getSpacerStyle = ( { theme, space, direction }: IGetSpacerStyleProps ) => {
	const sizeProp = direction === 'row' ? 'width' : 'height';
	const rawSpace = theme?.layout.spacing( `${space}` ) || 0;

	return { [ sizeProp ]: rawSpace };
};

const useSpacedChildren = ( {
	children, direction, space
} : IUseSpacedChildrenProps ): IStackProps[ 'children' ] => {
	const theme = useTheme();

	return useMemo<IStackProps[ 'children' ]>(
		() => {
			if ( !theme || !space ) { return children; }

			const spacerStyle = getSpacerStyle( { theme, space, direction } );
			const items = React.Children.toArray( children ) as JSX.Element[];

			return items.map( ( item, index ) => (
				<React.Fragment key={item.key ?? `spaced-child-${index}`}>
					{item}
					{index < items.length - 1 && (
						<Box style={spacerStyle} testID={`spacer-${index}`} />
					)}
				</React.Fragment>
			) );
		},
		[ theme, children, space ]
	);
};

export default useSpacedChildren;
