import { useState } from 'react';
import type { GestureResponderEvent, PressableProps } from 'react-native';

interface IUseIsCheckedState {
	isSelectedProp: boolean,
	isIndeterminatedProp: boolean,
	props: {
		onPress?: PressableProps['onPress']
	}
}

const useIsSelected = ( {
	isIndeterminatedProp = false,
	isSelectedProp = false,
	props: { onPress: onPressProp }
}: IUseIsCheckedState ) => {
	const [ isSelected, setIsSelected ] = useState( isSelectedProp );
	const [ isIndeterminated, setIsIndeterminated ] = useState( isIndeterminatedProp );

	const onPress = ( event: GestureResponderEvent ) => {
		setIsSelected( !isSelected );
		setIsIndeterminated( false );
		if ( onPressProp ) onPressProp( event );
	};

	return { isSelected, isIndeterminated, onPress };
};

export default useIsSelected;
