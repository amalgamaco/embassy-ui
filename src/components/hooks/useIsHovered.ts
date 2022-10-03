import { useCallback, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import type { IHoverableComponent } from '../../core/components/types';

interface IUseIsHoveredState {
	onHoverIn?: IHoverableComponent[ 'onHoverIn' ],
	onHoverOut?: IHoverableComponent[ 'onHoverOut' ]
}

const useIsHovered = ( {
	onHoverIn: onHoverInProp,
	onHoverOut: onHoverOutProp
}: IUseIsHoveredState ) => {
	const [ isHovered, setIsHovered ] = useState( false );

	const onHoverIn = useCallback( ( event: GestureResponderEvent ) => {
		onHoverInProp?.( event );
		setIsHovered( true );
	}, [ setIsHovered, onHoverInProp ] );

	const onHoverOut = useCallback( ( event: GestureResponderEvent ) => {
		onHoverOutProp?.( event );
		setIsHovered( false );
	}, [ setIsHovered, onHoverOutProp ] );

	return { isHovered, onHoverIn, onHoverOut };
};

export default useIsHovered;
