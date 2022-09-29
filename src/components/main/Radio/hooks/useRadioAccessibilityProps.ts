import { useMemo } from 'react';
import { Platform } from 'react-native';

interface IUseRadioAccessibilityProps {
	label?: string,
	selected: boolean,
	disabled: boolean
}

const useRadioAccessibilityProps = ( {
	label,
	selected,
	disabled
}: IUseRadioAccessibilityProps ) => useMemo(
	() => ( {
		accessible: true,
		accessibilityRole: 'radio',
		accessibilityLabel: label,
		accessibilityState: { checked: selected, disabled },
		...( Platform.OS === 'web'
			? { accessibilityChecked: selected }
			: {} )

	} ),
	[ label, selected, disabled ]
);

export default useRadioAccessibilityProps;
