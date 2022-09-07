import { useCallback, useState } from 'react';

const useIsHovered = () => {
	const [ isHovered, setIsHovered ] = useState( false );

	const onHoverIn = useCallback( () => {
		setIsHovered( true );
	}, [ setIsHovered ] );

	const onHoverOut = useCallback( () => {
		setIsHovered( false );
	}, [ setIsHovered ] );

	return { isHovered, onHoverIn, onHoverOut };
};

export default useIsHovered;
